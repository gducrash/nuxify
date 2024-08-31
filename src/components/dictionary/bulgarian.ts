import dictionary_en from './english';

export default function (videoTitle: string) {

    const videoTitle_en = dictionary_en(videoTitle, true);

    return videoTitle_en
        .replace(/(^|\s)АЗ(?=\s|$)/g, 'НИЕ')
        .replace(/(^|\s)аз(?=\s|$)/gi, 'аз')

        .replace(/(^|\s)Мои(?=\s|$)/g, 'Наще')
        .replace(/(^|\s)МОИ(?=\s|$)/g, 'НАЩЕ')
        .replace(/(^|\s)мои(?=\s|$)/gi, 'наще')

        .replace(/(^|\s)Моите(?=\s|$)/g, 'Нашите')
        .replace(/(^|\s)МОИТЕ(?=\s|$)/g, 'НАШИТЕ')
        .replace(/(^|\s)моите(?=\s|$)/gi, 'нашите')

        .replace(/(^|\s)МЕНЕ(?=\s|$)/g, 'НАС')
        .replace(/(^|\s)Мене(?=\s|$)/g, 'Нас')
        .replace(/(^|\s)мене(?=\s|$)/gi, 'нас')

        .replace(/\b аз СЪМ\b/g, 'НИЕ СМЕ')
        .replace(/\b аз am\b/gi, 'Ние сме')
        .replace(/\b аз'M\b/g, 'НИЕ\' СМЕ')
        .replace(/\b аз'm\b/gi, 'ние сме')

        // Бях => бяхме
        .replace(/(^|\s)БЯХ(?=\s|$)/g, 'БЯХМЕ')
        .replace(/(^|\s)бях(?=\s|$)/gi, 'бяхме')

        // АЗ => НИЕ
        .replace(/(^|\s)аз(?=\s|$)/gi, 'НИЕ')
        .replace(/(^|\s)аз ще(?=\s|$)/gi, 'ние ще')
        .replace(/(^|\s)не знам(?=\s|$)/gi, 'ние не знаеме')
        .replace(/(^|\s)не ме интересува(?=\s|$)/gi, 'не ни интересува')

        // мой => наш
        .replace(/(^|\s)моя(?=\s|$)/gi, 'нашия')
        .replace(/(^|\s)МОЯ(?=\s|$)/g, 'НАШИЯ')
        .replace(/(^|\s)мой(?=\s|$)/gi, 'наш')
        .replace(/(^|\s)МОЙ(?=\s|$)/g, 'НАШ');
}
