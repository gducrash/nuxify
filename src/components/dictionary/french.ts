export default function (videoTitle: string, usedAsReference: boolean = false) {

    let newVideoTitle = videoTitle

        // J'ai -> Nous avons
        .replace(/\bJ'ai\b/g, 'Nous avons')
        .replace(/\bJ'AI\b/g, 'NOUS AVONS')
        .replace(/\bj'ai\b/gi, 'nous avons')

        // Je suis -> Nous sommes
        .replace(/\bJe suis\b/g, 'Nous sommes')
        .replace(/\bJE SUIS\b/g, 'NOUS SOMMES')
        .replace(/\bje suis\b/gi, 'nous sommes')

        // Je me suis -> Nous nous sommes
        .replace(/\bJe me suis\b/g, 'Nous nous sommes')
        .replace(/\bJE ME SUIS\b/g, 'NOUS NOUS SOMMES')
        .replace(/\bje me suis\b/gi, 'nous nous sommes')

        // Je pack -> on pack (???)
        .replace(/\bJe pack\b/g, 'On pack')
        .replace(/\bJE PACK\b/g, 'ON PACK')
        .replace(/\bje pack\b/gi, 'on pack')

        // Je test/je teste -> nous testons
        .replace(/\bJe test\b/g, 'Nous testons')
        .replace(/\bJe teste\b/g, 'Nous testons')
        .replace(/\bJE TEST\b/g, 'NOUS TESTONS')
        .replace(/\bJE TESTE\b/g, 'NOUS TESTONS')
        .replace(/\bje test\b/gi, 'nous testons')
        .replace(/\bje teste\b/gi, 'nous testons')

        // J'arrête -> nous arrêtons
        .replace(/\bj'arrête\b/g, 'nous arrêtons')
        .replace(/\bJ'arrête\b/g, 'Nous arrêtons')
        .replace(/\bJ'ARRÊTE\b/g, 'NOUS ARRÊTONS')

        // J'achète -> nous achetons
        .replace(/\bJ'achète\b/g, 'Nous achetons')
        .replace(/\bJ'ACHÈTE\b/g, 'NOUS ACHETONS')
        .replace(/\bj'achète\b/g, 'nous achetons')

        // Je vais -> Nous allons
        .replace(/\bJe vais\b/g, 'Nous allons')
        .replace(/\bJE VAIS\b/g, 'NOUS ALLONS')
        .replace(/\bje vais\b/gi, 'nous allons')

        // Je fais -> Nous faisons
        .replace(/\bJe fais\b/g, 'Nous faisons')
        .replace(/\bJE FAIS\b/g, 'NOUS FAISONS')
        .replace(/\bje fais\b/gi, 'nous faisons')

        // Je veux -> Nous voulons
        .replace(/\bJe veux\b/g, 'Nous voulons')
        .replace(/\bJE VEUX\b/g, 'NOUS VOULONS')
        .replace(/\bje veux\b/gi, 'nous voulons')

        // Je pense -> Nous pensons
        .replace(/\bJe pense\b/g, 'Nous pensons')
        .replace(/\bJE PENSE\b/g, 'NOUS PENSONS')
        .replace(/\bje pense\b/gi, 'nous pensons')

        // Je simule -> Nous simulons
        .replace(/\bJe simule\b/g, 'Nous simulons')
        .replace(/\bJE SIMULE\b/g, 'NOUS SIMULONS')
        .replace(/\bje simule\b/gi, 'nous simulons')

        // Mon -> Notre
        .replace(/\bMon\b/g, 'Notre')
        .replace(/\bMON\b/g, 'NOTRE')
        .replace(/\bmon\b/gi, 'notre')

        // Je -> Nous
        .replace(/\bJe\b/g, 'Nous')
        .replace(/\bJE\b/g, 'NOUS')
        .replace(/\bje\b/gi, 'nous')

        // Moi -> Nous
        .replace(/\bMoi\b/g, 'Nous')
        .replace(/\bMOI\b/g, 'NOUS')
        .replace(/\bmoi\b/gi, 'nous')

        // Mes -> Nos
        .replace(/\bMes\b/g, 'Nos')
        .replace(/\bMES\b/g, 'NOS')
        .replace(/\bmes\b/gi, 'nos')
        
        // Moi-même => nous-mêmes
        .replace(/\bMoi-même\b/g, 'Nous-mêmes')
        .replace(/\bMOI-MÊME\b/g, 'NOUS-MÊMES')
        .replace(/\bMOI-MEME\b/g, 'NOUS-MÊMES')
        .replace(/\bmoi-même\b/gi, 'nous-mêmes')
        .replace(/\bMoi même\b/g, 'Nous mêmes')
        .replace(/\bMOI MÊME\b/g, 'NOUS MÊMES')
        .replace(/\bMOI MEME\b/g, 'NOUS MÊMES')
        .replace(/\bmoi même\b/gi, 'nous mêmes')

    return newVideoTitle;
}