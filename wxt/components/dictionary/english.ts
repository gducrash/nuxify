export default function (videoTitle: string, usedAsReference: boolean = false) {

    let newVideoTitle = videoTitle
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
        .replace(/\bmine\b/gi, 'ours');


    // only apply these
    // if the dictionary is NOT being used by another dictionary
    // (anohter words, it's used directly by the extension)
    if (!usedAsReference) {
        newVideoTitle = newVideoTitle
            // bonus: basic cyrillic support! 
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

            .replace(/(^|\s)МЕНІ(?=\s|$)/g, 'НАМ')
            .replace(/(^|\s)Мені(?=\s|$)/g, 'Нам')
            .replace(/(^|\s)мені(?=\s|$)/gi, 'нам');
    }

    return newVideoTitle;

}