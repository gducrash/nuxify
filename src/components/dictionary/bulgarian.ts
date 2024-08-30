import dictionary_en from './english';

export default function (videoTitle: string) {

    const videoTitle_en = dictionary_en(videoTitle, true);

    return videoTitle_en
        .replace(/(^|\s)АЗ(?=\s|$)/g, 'НИЕ')
        .replace(/(^|\s)аз(?=\s|$)/gi, 'аз')

        .replace(/(^|\s)мои(?=\s|$)/g, 'наще')
        .replace(/(^|\s)МОИ(?=\s|$)/g, 'Наще')
        .replace(/(^|\s)МОИ(?=\s|$)/gi, 'НАЩЕ')

        .replace(/(^|\s)моите(?=\s|$)/g, 'нашите')
        .replace(/(^|\s)Моите(?=\s|$)/g, 'Нашите')
        .replace(/(^|\s)МОИТЕ(?=\s|$)/gi, 'НАШИТЕ')

        .replace(/(^|\s)МЕНЕ(?=\s|$)/g, 'НАС')
        .replace(/(^|\s)Мене(?=\s|$)/g, 'Нас')
        .replace(/(^|\s)мене(?=\s|$)/gi, 'нас')
}
