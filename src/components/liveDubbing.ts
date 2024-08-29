import { LIVE_DUBBING_OFFSET_MS } from './constants';
import { getVideoLiveCaptions, getLiveDubbingType, playLiveDubbing, setupFadeCssAnim, setupNuxOverlay, getYtVideoId } from './util';
import type { ExtensionSettings, YoutubeCaptionData } from './types';

export async function setupLiveDubbing (settings: ExtensionSettings) {

    // get the video data
    const video = document.querySelector('.html5-main-video') as HTMLVideoElement;
    if (!video) return;

    let videoId = getYtVideoId();
    let captionData: YoutubeCaptionData|null = null;

    // add nux taku overlay to main video
    const videoContainer = video
        ?.parentElement
        ?.parentElement;

    const nuxOverlayElem = setupNuxOverlay(videoContainer);
    setupFadeCssAnim();

    function mainOverlayFade () {
        nuxOverlayElem.style.opacity = '1';
        nuxOverlayElem.style.animation = '';
        window.setTimeout(() => {
            nuxOverlayElem.style.animation = 'nuxifyMainVideoFade 1s ease both';
        }, 10);
    }

    async function refreshCaptionData () {
        captionData = null;
        if (videoId) {
            // get the captions data
            const captions = await getVideoLiveCaptions(videoId, true);
            if (!captions?.length) return;
            captionData = captions[0];
        }
        console.log("[NUXIFY] Captions replaced for video", videoId);
    }

    refreshCaptionData();


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
    video.onloadeddata = () => {
        const newVideoId = getYtVideoId();
        if (!newVideoId || newVideoId != videoId) {
            videoId = newVideoId;
            refreshCaptionData();
        }
    }

    startVideoUpdate();

    function handleVideoUpdate () {
        if (video.paused) stopVideoUpdate();
        if (!captionData) return;

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
            // debug
            //// console.log(currentCaptionSegment.utf8);

            // get caption duration
            const nextCaptionSegment = currentCaptionSegments[currentCaptionSegmentIndex+1];
            let currentCaptionDuration: number|undefined = nextCaptionSegment
                ? nextCaptionSegment.tOffsetMs - currentCaptionSegment.tOffsetMs
                : currentCaptionEvent.dDurationMs! - currentCaptionSegment.tOffsetMs;
            if (isNaN(currentCaptionDuration)) currentCaptionDuration = undefined;

            // play live dubbing
            const segmentType = getLiveDubbingType(currentCaptionSegment.utf8);
            if (segmentType) {
                playLiveDubbing(
                    segmentType,
                    video,
                    Math.min(currentCaptionDuration ?? 200, 500),
                    settings.featureLiveDubbingSidechainCompression,
                    settings.featureLiveDubbingThud,
                );
                mainOverlayFade();
            }
        }

        lastIndex = currentIndex;
    }

    console.log("[NUXIFY] Live dubbing ready!");

}