import dictionary_en from './english';

export default function (videoTitle: string) {

    const videoTitle_en = dictionary_en(videoTitle, true);

    return videoTitle_en
        .replace(/(^|\s)Я(?=\s|$)/g, 'МИ')
        .replace(/(^|\s)я(?=\s|$)/gi, 'ми')

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