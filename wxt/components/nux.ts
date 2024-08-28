

// used to generate a pseudo-random value for every title
// so that the random thumbnails always match
function getStringSeed (str: string, max: number) {
  let seed = 0;
  for (let i = 0; i < str.length; i++)
      seed += str.charCodeAt(i);
  seed = seed % max;
  return seed;
}

// the fun part! 
function nuxifyString (oldTitle: string) {

    const newTitle = oldTitle
        // I am => we are
        .replace(/\bI AM\b/g, 'WE ARE')
        .replace(/\bi am\b/gi, 'We are')
        .replace(/\bI'M\b/g, 'WE\'RE')
        .replace(/\bi'm\b/gi, 'we\'re')

        // I was => we were
        .replace(/\bI WAS\b/g, 'WE WERE')
        .replace(/\bi was\b/gi, 'We were')
        
        // I => WE
        .replace(/\bi\b/gi, 'WE')
        .replace(/\bimma\b/gi, 'we gonna')
        .replace(/\bidk\b/gi, 'wdk')
        .replace(/\bidc\b/gi, 'wdc')
        .replace(/\bidfk\b/gi, 'wdfk')
        .replace(/\bidfc\b/gi, 'wdfc')
        .replace(/\bidgaf\b/gi, 'wdgaf')

        // me => us
        .replace(/\bMe\b/g, 'Us')
        .replace(/\bME\b/g, 'US')
        .replace(/\bme\b/gi, 'us')

        // myself => ourselves
        .replace(/\bMyself\b/g, 'Ourselves')
        .replace(/\bMYSELF\b/g, 'OURSELVES')
        .replace(/\bmyself\b/gi, 'ourselves')

        // my => our
        .replace(/\bMy\b/g, 'Our')
        .replace(/\bMY\b/g, 'OUR')
        .replace(/\bmy\b/gi, 'our')

        // mine => ours
        .replace(/\bMine\b/g, 'Ours')
        .replace(/\bMINE\b/g, 'OURS')
        .replace(/\bmine\b/gi, 'ours')

        // bonus: russian and ukrainian support! 
        .replace(/(^|\s)Я(?=\s|$)/g, 'МЫ')
        .replace(/(^|\s)я(?=\s|$)/gi, 'мы')

        .replace(/(^|\s)МЕНЯ(?=\s|$)/g, 'НАС')
        .replace(/(^|\s)Меня(?=\s|$)/g, 'Нас')
        .replace(/(^|\s)меня(?=\s|$)/gi, 'нас')

        .replace(/(^|\s)МНЕ(?=\s|$)/g, 'НАМ')
        .replace(/(^|\s)Мне(?=\s|$)/g, 'Нам')
        .replace(/(^|\s)мне(?=\s|$)/gi, 'нам')

        .replace(/(^|\s)МНОЙ(?=\s|$)/g, 'НАМИ')
        .replace(/(^|\s)Мной(?=\s|$)/g, 'Нами')
        .replace(/(^|\s)мной(?=\s|$)/gi, 'нами')
        .replace(/(^|\s)МНОЮ(?=\s|$)/g, 'НАМИ')
        .replace(/(^|\s)Мною(?=\s|$)/g, 'Нами')
        .replace(/(^|\s)мною(?=\s|$)/gi, 'нами')

        .replace(/(^|\s)МЕНЕ(?=\s|$)/g, 'НАС')
        .replace(/(^|\s)Мене(?=\s|$)/g, 'Нас')
        .replace(/(^|\s)мене(?=\s|$)/gi, 'нас')

        .replace(/(^|\s)МЕНі(?=\s|$)/g, 'НАМ')
        .replace(/(^|\s)Мені(?=\s|$)/g, 'Нам')
        .replace(/(^|\s)мені(?=\s|$)/gi, 'нам');


    return {
        newTitle,
        isDifferent: newTitle != oldTitle,
        seed: getStringSeed(newTitle, 5),
    };

}

function replaceVideo (titleElem: HTMLSpanElement, thumbnailElem?: Element|null) {
    // replace video card title
    const { newTitle, isDifferent, seed } = nuxifyString(titleElem.innerText);
    if (!isDifferent) return;
    const titleElemText = titleElem.childNodes[0] as Text;
    titleElemText.data = newTitle;
    titleElem.title = newTitle;

    // add nux to video card thumbnail
    if (thumbnailElem) {
        const ytImageElem = thumbnailElem.querySelector('yt-image');
        if (ytImageElem) {
            const nuxImg = document.createElement('img');
            nuxImg.src = browser.runtime.getURL(`assets/media/thumb${seed}.png` as any);
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

function onElement (
    selector: string, 
    callback: (elem: HTMLElement, type: string, ...args: any[]) => void, 
    config: MutationObserverInit, 
    targetNode: HTMLElement = document.body
) {
    const observer = new MutationObserver((mutationsList) => {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach(node => {
                    const elem = node as HTMLElement;
                    if (elem.nodeType === 1 && elem.matches(selector)) {
                        callback(elem, 'added');
                    }
                });
            } else if (mutation.type === 'attributes') {
                const elem = mutation.target as HTMLElement;
                if (elem.matches(selector)) {
                    //// console.log(mutation.attributeName);
                    callback(elem, 'attributes', mutation.attributeName);
                }
            }
        }
    });

    observer.observe(targetNode, config);
    return observer;
}


export function initNuxify () {
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

        replaceVideo(titleElem, thumbnailElem);
    }, { 
        childList: true, 
        subtree: true, 
        attributes: true, 
        attributeFilter: ['id', 'title', 'is-empty'],
    });

    // i couldn't find a way to react to the main video title change
    // hence this ugly hacky setInterval solution
    // someone smarter than me, please fix this, i beg 🙏
    setInterval(() => {
        // replace main video head title
        const titleElem = document.querySelector('ytd-watch-metadata #title h1 yt-formatted-string') as HTMLSpanElement;
        if (titleElem) {
            const { newTitle, isDifferent } = nuxifyString(titleElem.innerText);
            if (isDifferent) {
                const titleElemText = titleElem.childNodes[0] as Text;
                titleElemText.data = newTitle;
                titleElem.setAttribute('nuxified', '1');
            }
        }

        // replace main video miniplayer title
        const miniplayerTitleElem = document.querySelector('.miniplayer-title') as HTMLSpanElement;
        if (miniplayerTitleElem) {
            const { newTitle, isDifferent } = nuxifyString(miniplayerTitleElem.innerText);
            if (isDifferent) {
                const miniplayerTitleElemText = miniplayerTitleElem.childNodes[0] as Text;
                miniplayerTitleElemText.data = newTitle;
                miniplayerTitleElem.setAttribute('nuxified', '1');
            }
        }

        // replace document title (shown on the browser tab) 
        const { newTitle, isDifferent } = nuxifyString(document.title);
        if (isDifferent) {
            document.title = newTitle;
        }
    }, 500);

    console.log("NUXIFYING");
}
