import { nuxifyString } from './nuxify';
import { onElement } from './util';
import type { ExtensionSettings } from './types';
import type { PublicPath } from 'wxt/browser';

function replaceVideo (titleElem: HTMLSpanElement, thumbnailElem?: Element|null, language?: Language) {
    // replace video card title
    const { newTitle, isDifferent, seed } = nuxifyString(titleElem.innerText, language);
    if (!isDifferent) return;
    const titleElemText = titleElem.childNodes[0] as Text;
    titleElemText.data = newTitle;
    titleElem.title = newTitle;

    // add nux to video card thumbnail
    if (thumbnailElem) {
        const ytImageElem = thumbnailElem.querySelector('yt-image');
        if (ytImageElem) {
            const nuxImg = document.createElement('img');
            nuxImg.src = browser.runtime.getURL(`media/thumb${seed}.png` as PublicPath);
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

function setupCardsObserver (language?: Language) {
    // react to dom tree updates
    // and update new video cards
    onElement('#video-title', elem => {
        const thumbnailElem = elem
            ?.parentElement
            ?.parentElement
            ?.parentElement
            ?.parentElement
            ?.parentElement
            ?.querySelector('#thumbnail');
            
        if (thumbnailElem?.querySelector('.nuxthumb'))
            return;

        let titleElem: HTMLSpanElement;
        if (elem.querySelector('yt-formatted-string')) {
            titleElem = elem.querySelector('yt-formatted-string') as HTMLSpanElement;
        } else {
            titleElem = elem;
        }

        replaceVideo(titleElem, thumbnailElem, language);
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

    setupCardsObserver(lang);

    // i couldn't find a way to react to the main video title change
    // hence this ugly hacky setInterval solution
    // someone smarter than me, please fix this, i beg 🙏
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

    console.log("NUXIFYING");
    
}