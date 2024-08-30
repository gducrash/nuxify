export default function (videoTitle: string, usedAsReference: boolean = false) {

    let newVideoTitle = videoTitle
        // Аз съм => ние сме
       .replace(/\b аз СЪМ\b/g, 'НИЕ СМЕ')
        .replace(/\b аз am\b/gi, 'Ние сме')
        .replace(/\b аз'M\b/g, 'НИЕ' СМЕ')
        .replace(/\b аз'm\b/gi, 'ние сме')

        // Бях => бяхме
        .replace(/\bI WAS\b/g, 'НИЕ БЯХМЕ')
        .replace(/\bi was\b/gi, 'Ние бяхме')
        
        // АЗ => НИЕ
        .replace(/\bаз \b/gi, 'НИЕ')
        .replace(/\bаз ще\b/gi, 'ние ще')
        .replace(/\b не знам\b/gi, 'ние не знаеме')
        .replace(/\bне ме интересува\b/gi, 'не ни интересува')

        // аз => нас
        .replace(/\bАз\b/g, 'Нас')
        .replace(/\bАЗ\b/g, 'НАС')
        .replace(/\bаз\b/gi, 'нас')

        // себе си => себе си
        .replace(/\bСМоите\b/g, 'Нашите')
        .replace(/\bМОИТЕ СИ\b/g, 'НАШИТЕ')
        .replace(/bмоите\b/gi, 'нашите')

        // мой => наш
        .replace(/\bМоя\b/g, 'Наши')
        .replace(/\b МОЯ\b/g, 'НАШИЯ')
        .replace(/\bmой\b/gi, 'наш')


    return newVideoTitle;

}