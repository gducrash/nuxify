export type ExtensionSettings = {
    lang: Language|'!auto', // preffered language for title replacements. 
                            // "!auto" = auto-detect based on document locale

    featureLiveDubbingEnabled: boolean,              // enable live dubbing feature
    featureLiveDubbingSidechainCompression: boolean; // enable live dubbing sidechain compression
    featureLiveDubbingThud: boolean;                 // enable vine boom sound effect
}

export type Language =
    | 'en'
    | 'es'
    | 'uk'
    | 'ru';

export type DictionaryData = {
    languageName: string,
    languageNameLocalized: string,
    contributors: string[],
    nuxify: (videoTitle: string) => string,
}

export type DictionaryMap = {
    [key in Language]: DictionaryData;
}

export type YoutubeCaptionData = {
    events: {
        aAppend: number,
        dDurationMs?: number,
        segs: {
            utf8: string,
            tOffsetMs?: number, 
            acAsrConf?: number,
        }[],
        tStartMs: number,
        wWinId: number,
    }[],
}