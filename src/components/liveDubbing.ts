import { LIVE_DUBBING_OFFSET_MS } from './constants';
import { getVideoLiveCaptions, getLiveDubbingType } from './util';

export async function setupLiveDubbing () {
    const video = document.querySelector('.html5-main-video') as HTMLVideoElement;
    const query = new URLSearchParams(location.search);
    const videoId = query.get('v');
    if (!video || !videoId) return;

    const captions = await getVideoLiveCaptions(videoId, true);
    if (!captions.length) return;
    const captionData = captions[0];

    let lastIndex = -1;
    let updateInterval: number|null = null;

    function startVideoUpdate () {
        updateInterval && window.clearInterval(updateInterval);
        updateInterval = window.setInterval(handleVideoUpdate, 30);
    }
    function stopVideoUpdate () {
        updateInterval && window.clearInterval(updateInterval);
        updateInterval = null;
    }

    video.onplay = () => startVideoUpdate();
    video.onpause = () => stopVideoUpdate();

    startVideoUpdate();

    function handleVideoUpdate () {
        if(video.paused) stopVideoUpdate();

        // get current video time
        const timeMs = video.currentTime * 1000 - LIVE_DUBBING_OFFSET_MS;

        // get current caption event
        const currentCaptionEvent = captionData.events
            .filter(f => f.tStartMs <= timeMs) // filter for start time earlier than current time
            .sort((a, b) => b.tStartMs - a.tStartMs).at(0); // pick highest
        if (!currentCaptionEvent) return;

        // get current caption segment
        const currentCaptionSegments = currentCaptionEvent.segs
            .map(seg => ({ ...seg, tOffsetMs: seg.tOffsetMs ?? 0 })) // to number

        const currentCaptionSegment = currentCaptionSegments
            .filter(f => f.tOffsetMs + currentCaptionEvent.tStartMs <= timeMs) // filter start time earlier than current time 
            .sort((a, b) => b.tOffsetMs - a.tOffsetMs).at(0); // pick highest

        // get indexes
        const currentCaptionEventIndex = captionData.events.indexOf(currentCaptionEvent!);
        const currentCaptionSegmentIndex = currentCaptionSegments.indexOf(currentCaptionSegment!);
        const currentIndex = currentCaptionEventIndex * 1000 + currentCaptionSegmentIndex;

        if (currentIndex != lastIndex && currentCaptionSegment) {
            const segmentType = getLiveDubbingType(currentCaptionSegment.utf8);
            if (segmentType) {
                console.log(currentCaptionSegment?.utf8, currentIndex, video.volume, video.muted);
                if (!video.muted) {
                    video.muted = true
                    setTimeout(() => video.muted = false, 200);
                }
            }
        }

        lastIndex = currentIndex;
    }

    console.log("[NUXIFY] Live dubbing ready!")
}