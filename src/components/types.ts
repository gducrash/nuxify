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


export type ExtensionSettings = {
    lang: Language|'!auto',
}