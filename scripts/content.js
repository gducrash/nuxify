// used to generate a pseudo-random value for every title
// so that the random thumbnails always match
function getStringSeed (str, max) {
    let seed = 0;
    for (let i = 0; i < str.length; i++)
        seed += str.charCodeAt(i);
    seed = seed % max;
    return seed;
 }

// the fun part! 
function nuxifyString (oldTitle) {

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

function nuxifyStringSpanish (str) {
    const newTitle = str
    /* Extra-Bonus: Spanish support
        Para un completo soporte tomen de ejemplo la carpeta /spanishVerbs
        para todos aquellos que quieran modificar uno por uno los verbos.
        Esto porque, por ejemplo, las palabras singulares que terminen
        en "-ué" se puede simplificar casi todas a "amos" (Pagué/Pagamos,
        Entregué/Entregamos, Jugué/Jugamos). Pero terminaciones como "-eo"
        Hay muchas palabras que no siguen una regla para simplificarlo
        (Paseo/Paseamos, Creo/Creemos, Veo/Vemos, etc.)
        Por ahora solo modificare los sujetos, quien se quiera aventar el resto
        mucha suerte XD
        -- [To English:] --
        For a complete support take as example the /spanishVerbs folder
        folder for all those who want to modify verbs one by one.
        This is because, for example, singular words ending in “-ué” can almost all be simplified to “amos” (Pagué Pagué).
        in “-ué” can almost all be simplified to “amos” (Pagué/Pagamos,
        Entregué/Entregamos, Jugué/Juguamos). But endings like “-eo”
        There are many words that do not follow a rule to simplify it
        (Paseo/Paseamos, Creo/Creemos, Veo/Vemos, etc.).
        For now I'll only modify the subjects, whoever wants to do the rest will be welcome.
        best of luck XD
        DO NOT INCLUDE THE FOLDER FOR PRODUCTION! Only for contributions for the Spanish language.
        */

       .replace(/\bFUI TU\b/g, 'FUIMOS')
       .replace(/\bFui Tu\b/g, 'Fuimos')
       .replace(/\bfui tu\b/gi, 'fuimos')

       .replace(/\bME ARREPIENTO\b/g, 'NOS ARREPENTIMOS')
       .replace(/\bMe Arrepiento\b/g, 'Nos Arrepentimos')
       .replace(/\bme arrepiento\b/gi, 'nos arrepentimos')

       .replace(/\bME HARTÉ\b/g, 'NOS HARTAMOS')
       .replace(/\bMe Harto\b/g, 'Nos Harto')
       .replace(/\bme harto\b/gi, 'nos harto')

       .replace(/\bYO NO SOY\b/g, 'NOSOTROS NO SOMOS')
       .replace(/\bYo No Soy\b/g, 'Nosotros No Somos')
       .replace(/\byo no soy\b/gi, 'nosotros no somos')

       .replace(/\bNO SOY\b/g, 'NO SOMOS')
       .replace(/\bNo Soy\b/g, 'No Somos')
       .replace(/\bno soy\b/gi, 'no somos')

       .replace(/\bYO ME\b/g, 'NOS')
       .replace(/\bYo Me\b/g, 'Nos')
       .replace(/\byo me\b/gi, 'nos')

    
       .replace(/\bYO FUERA\b/g, 'NOSOTROS FUERAMOS')
       .replace(/\bYo Fuera\b/g, 'Nosotros Fueramos')
       .replace(/\byo fuera\b/gi, 'nosotros fueramos')

       .replace(/\bME QUEDE\b/g, 'NOS QUEDAMOS')
       .replace(/\bME QUEDÉ\b/g, 'Nos Quedamos')
       .replace(/\bMe Quede\b/g, 'Nos Quedamos')
       .replace(/\bMe Quedé\b/g, 'nos quedamos')
       .replace(/\bme quede\b/gi, 'nos quedamos')
       .replace(/\bme quedé\b/gi, 'nos quedamos')

       .replace(/\bME VOY\b/g, 'NOS VAMOS')
       .replace(/\bMe Voy\b/g, 'Nos Vamos')
       .replace(/\bme voy\b/gi, 'nos vamos')

       .replace(/\bYO ERA\b/g, 'FUIMOS')
       .replace(/\bYo Era\b/g, 'Fuimos')
       .replace(/\byo era\b/gi, 'fuimos')

        .replace(/\bYO\b/g, 'NOSOTROS')
        .replace(/\bYo\b/g, 'Nosotros')
        .replace(/\byo\b/gi, 'nosotros')

        .replace(/\bMI\b/g, 'NUESTR@')
        .replace(/\bMi\b/g, 'Nuestr@')
        .replace(/\bmi\b/gi, 'nuestr@')

        .replace(/\bME\b/g, 'NOS')
        .replace(/\bMe\b/g, 'Nos')
        .replace(/\bme\b/g, 'nos')

        .replace(/\bMETÍ\b/g, 'METIMOS')
        .replace(/\bMetí\b/g, 'Metimos')
        .replace(/\bmetí\b/gi, 'metimos')

        .replace(/\bSOY\b/g, 'SOMOS')
        .replace(/\bSoy\b/g, 'Somos')
        .replace(/\bsoy\b/gi, 'somos')

        //Remplaza todas las terminaciones "ué" por "amos" que precedan con cualquier palabra/digito
        .replace(/\b\w{5,}UÉ/g, function(match){
            console.log("ENTRE BRO")
            console.log(match)
            console.log(match.slice(0, -2) + 'AMOS')
            return match.slice(0, -2) + 'AMOS';
        })
        .replace(/\b\w{5,}ué/gi, function(match){
            console.log("entre bro")
            console.log(match)
            console.log(match.slice(0, -2) + 'amos')
            return match.slice(0, -2) + 'amos';
        })

        .replace(/\bHE\b/g, 'HEMOS')
        .replace(/\bHe\b/g, 'Hemos')
        .replace(/\bhe\b/gi, 'hemos')

        .replace(/\bTUVE\b/g, 'TUVIMOS')
        .replace(/\bTuve\b/g, 'Tuvimos')
        .replace(/\btuve\b/gi, 'tuvimos')

        .replace(/\bHICE\b/g, 'HICIMOS')
        .replace(/\bHice\b/g, 'Hicimos')
        .replace(/\bhice\b/gi, 'hicimos')

        .replace(/\bREACCIONO\b/g, 'REACCIONAMOS')
        .replace(/\bReacciono\b/g, 'Reaccionamos')
        .replace(/\breacciono\b/gi, 'reaccionamos')

        .replace(/\bDESCUBRI\b/g, 'DESCUBRIMOS')
        .replace(/\bDescubri\b/g, 'Descubrimos')
        .replace(/\bdescubri\b/gi, 'descubrimos')
        .replace(/\bDESCUBRÍ\b/g, 'DESCUBRIMOS')
        .replace(/\bDescubrí\b/g, 'Descubrimos')
        .replace(/\bdescubrí\b/gi, 'descubrimos')

        .replace(/\bSOBREVIVO\b/g, 'SOBREVIVIMOS')
        .replace(/\bSobrevivo\b/g, 'Sobrevivimos')
        .replace(/\bsobrevivo\b/gi, 'sobrevivimos')
        .replace(/\bSOBREVIVI\b/g, 'SOBREVIVIMOS')
        .replace(/\bSobrevivi\b/g, 'Sobrevivimos')
        .replace(/\bsobrevivi\b/gi, 'sobrevivimos')
        .replace(/\bSOBREVIVÍ\b/g, 'SOBREVIVIMOS')
        .replace(/\bSobreviví\b/g, 'Sobrevivimos')
        .replace(/\bsobreviví\b/gi, 'sobrevivimos')

        .replace(/\bDESBLOQUEO\b/g, 'DESBLOQUEAMOS')
        .replace(/\bDesbloqueo\b/g, 'Desbloqueamos')
        .replace(/\bdesbloqueo\b/gi, 'desbloqueamos')

        .replace(/\bRIO\b/g, 'REIMOS')
        .replace(/\bRio\b/g, 'Reimos')
        .replace(/\brio\b/gi, 'reimos')

        //Parody of famous name-youtubers within his name on his own video
        .replace(/\bDROSS\b/g, 'NUXTAKU')
        .replace(/\bDross\b/g, 'Nuxtaku')
        .replace(/\bdross\b/gi, 'nuxtaku')
        .replace(/\bDROSSROTZANK\b/g, 'NUXTAKU')
        .replace(/\bDrossRotzank\b/g, 'Nuxtaku')
        .replace(/\bdrossrotzank\b/gi, 'nuxtaku')

        .replace(/\bSR.PELO\b/g, 'NUXTAKU')
        .replace(/\bSr.Pelo\b/g, 'Nuxtaku')
        .replace(/\bsr.pelo\b/gi, 'Nuxtaku')
        .replace(/\bPELO\b/g, 'NUXTAKU')
        .replace(/\bPelo\b/g, 'Nuxtaku')
        .replace(/\bpelo\b/gi, 'Nuxtaku')

        .replace(/\bDALAS\b/g, 'NUXTAKU')
        .replace(/\bDalas\b/g, 'Nuxtaku')
        .replace(/\bdalas\b/gi, 'nuxtaku')

        .replace(/\bFERNANFLOO\b/g, 'NUXTAKU')
        .replace(/\bFernanfloo\b/g, 'Nuxtaku')
        .replace(/\bfernanfloo\b/gi, 'nuxtaku')
    return {
        newTitle,
        isDifferent: newTitle != str,
        seed: getStringSeed(newTitle, 5),
    };
}

function replaceVideo (titleElem, thumbnailElem) {
	// replace video card title
    const isSpanish = document.documentElement.lang.startsWith('es');
    //if the html tag, lang is es. Use the Spanish nuxify function for better compatibility
    //if not, use for default the nuxify function
    //Expect not working good for english videos if spanish user
    const { newTitle, isDifferent, seed } = isSpanish ? nuxifyStringSpanish(titleElem.innerText) : nuxifyString(titleElem.innerText);
    if (!isDifferent) return;
    titleElem.childNodes[0].data = newTitle;
    titleElem.title = newTitle;

    // add nux to video card thumbnail
    if (thumbnailElem) {
        const ytImageElem = thumbnailElem.querySelector('yt-image');
        if (ytImageElem) {
            const nuxImg = document.createElement('img');
            nuxImg.src = chrome.runtime.getURL(`assets/media/thumb${seed}.png`);
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

function onElement (selector, callback, config, targetNode = document.body) {
    const observer = new MutationObserver(function(mutationsList) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === 1 && node.matches(selector)) {
                        callback(node, 'added');
                    }
                });
            } else if (mutation.type === 'attributes') {
                if (mutation.target.matches(selector)) {
                    //// console.log(mutation.attributeName);
                    callback(mutation.target, 'attributes', mutation.attributeName);
                }
            } else if (mutation.type === 'characterData') {
                if (mutation.target.parentNode && mutation.target.parentNode.matches(selector)) {
                    const newValue = mutation.target.textContent;
                    const oldValue = mutation.oldValue;
                    if (newValue.trim() != oldValue.trim()) {
                        callback(mutation.target.parentNode, 'content', mutation.target);
                    }
                }
            }
        }
    });

    observer.observe(targetNode, config);
    return observer;
}

// react to dom tree updates
// and update new video cards
const cardsTitleObserver = onElement('#video-title', elem => {
    const thumbnailElem = elem
        .parentElement
        .parentElement
        .parentElement
        .parentElement
        .parentElement
        .querySelector('#thumbnail');
        
    if (thumbnailElem.querySelector('.nuxthumb'))
        return;

    let titleElem;
    if (elem.querySelector('yt-formatted-string')) {
        titleElem = elem.querySelector('yt-formatted-string');
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


//// function connectMainVideoTitleObserver () {
////     const mainVideoTitleObserver = onElement('ytd-watch-metadata #title h1 yt-formatted-string', elem => {
////         console.log("NUXIFYING!!!!", elem);
////         const titleElem = elem;
        
////         const { newTitle } = nuxifyString(titleElem.innerText);
////         titleElem.childNodes[0].data = newTitle;
////         titleElem.setAttribute('nuxified', '1');
////         mainVideoTitleObserver.disconnect();
////         setTimeout(() => { connectMainVideoTitleObserver() }, 100);
////     }, { 
////         childList: true, 
////         subtree: true, 
////         attributes: true, 
////         characterData: true,
////         characterDataOldValue: true,
////     });
//// }

// i couldn't find a way to react to the main video title change
// hence this ugly hacky setInterval solution
// someone smarter than me, please fix this, i beg 🙏
setInterval(() => {
	// replace main video head title
    const titleElem = document.querySelector('ytd-watch-metadata #title h1 yt-formatted-string');
    if (titleElem) {
        const { newTitle, isDifferent } = nuxifyString(titleElem.innerText);
        if (isDifferent) {
            titleElem.childNodes[0].data = newTitle;
            titleElem.setAttribute('nuxified', '1');
        }
    }

    // replace main video miniplayer title
    const miniplayerTitleElem = document.querySelector('.miniplayer-title');
    if (miniplayerTitleElem) {
        const { newTitle, isDifferent } = nuxifyString(miniplayerTitleElem.innerText);
        if (isDifferent) {
            miniplayerTitleElem.childNodes[0].data = newTitle;
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
