import { nuxifyString } from './nuxify';
import { setupLiveDubbing } from './liveDubbing';
import type { ExtensionSettings } from './types';
import type { PublicPath } from 'wxt/browser';
import { WTF_THUMBNAIL_PATH } from './constants';

function replaceVideo (titleElem: HTMLSpanElement, thumbnailElem: Element|null, settings: ExtensionSettings, language?: Language) {
    // replace video card title
    const { newTitle, isDifferent, seed } = nuxifyString(titleElem.innerText, language);
    if (isDifferent) {
        const titleElemText = titleElem.childNodes[0] as Text;
        titleElemText.data = newTitle;
        titleElem.title = newTitle;
    }

    if (isDifferent || settings.flagEveryThumbnail) {
        // add nux to video card thumbnail
        if (thumbnailElem) {
            const ytImageElem = thumbnailElem.querySelector('yt-image');
            if (ytImageElem) {
                const src = settings.flagOnlyWtfThumbnail
                    ? browser.runtime.getURL(WTF_THUMBNAIL_PATH)
                    : browser.runtime.getURL(`media/thumb${seed}.png` as PublicPath);

                const nuxImg = document.createElement('img');
                nuxImg.src = src;
                nuxImg.style.position = 'absolute';
                nuxImg.className = 'nuxthumb';
                nuxImg.style.left = '0';
                nuxImg.style.top = '0';
                nuxImg.style.width = '100%';
                nuxImg.style.height = '100%';
                ytImageElem.appendChild(nuxImg);
            }
        }
    }
}

function setupCardsObserver (settings: ExtensionSettings, language?: Language) {
    // react to dom tree updates
    // and update new video cards
    onElement('#video-title', elem => {
        // get thumbnail that's related to the title
        let thumbnailElem: Element|null = null;
        let cardParentRef: Element|null = elem?.parentElement;
        for (let i = 0; i < 10; i++) {
            thumbnailElem = cardParentRef?.querySelector('#thumbnail') ?? null;
            cardParentRef = cardParentRef?.parentElement ?? null;
            if (thumbnailElem) break;
        }
            
        if (thumbnailElem?.querySelector('.nuxthumb'))
            return;

        let titleElem: HTMLSpanElement;
        if (elem.querySelector('yt-formatted-string')) {
            titleElem = elem.querySelector('yt-formatted-string') as HTMLSpanElement;
        } else {
            titleElem = elem;
        }

        replaceVideo(titleElem, thumbnailElem, settings, language);
    }, { 
        childList: true, 
        subtree: true, 
        attributes: true, 
        attributeFilter: ['id', 'title', 'is-empty'],
    });
}

function nuxifyHtmlElement (element?: Element|null, language?: Language) {
    if (element) {
        const titleElem = element as HTMLSpanElement;
        const { newTitle, isDifferent } = nuxifyString(titleElem.innerText, language);
        if (isDifferent) {
            const titleElemText = titleElem.childNodes[0] as Text;
            titleElemText.data = newTitle;
            titleElem.setAttribute('nuxified', '1');
        }
    }
}




export function initNuxify (settings: ExtensionSettings) {
    
    const lang = settings.lang === '!auto'
        ? undefined
        : settings.lang;

    setupCardsObserver(settings, lang);

    // i couldn't find a way to react to the main video title change
    // hence this ugly hacky setInterval solution
    // someone smarter than me, please fix this, i beg 🙏
    if (!settings.flagOnlyAffectCards) {
        setInterval(() => {
            // replace main video head title
            const titleElem = document.querySelector('ytd-watch-metadata #title h1 yt-formatted-string');
            nuxifyHtmlElement(titleElem, lang);

            // replace main video miniplayer title
            const miniplayerTitleElem = document.querySelector('.miniplayer-title');
            nuxifyHtmlElement(miniplayerTitleElem, lang);

            // replace document title (shown on the browser tab) 
            const { newTitle, isDifferent } = nuxifyString(document.title, lang);
            if (isDifferent)
                document.title = newTitle;
        }, 500);
    }

    console.log("[NUXIFY] NUXIFYING");


    if (settings.featureLiveDubbingEnabled)
        setupLiveDubbing(settings);
    
}