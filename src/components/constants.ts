import dictionary_en from './dictionary/english';
import dictionary_es from './dictionary/spanish';
import dictionary_uk from './dictionary/ukrainian';
import dictionary_ru from './dictionary/russian';

import type { DictionaryMap, ExtensionSettings } from './types';

// Update this, if you plan to add another language!
// Also, update the "Language" type over in ./types.ts to include the id of your language
export const DICTIONARY: DictionaryMap = {
    en: {
        languageName: 'English',
        languageNameLocalized: 'English',
        contributors: [ 'Ucrash' ],
        nuxify: dictionary_en,
    },
    es: {
        languageName: 'Spanish',
        languageNameLocalized: 'Español',
        contributors: [ 'Herobrot' ],
        nuxify: dictionary_es,
    },
    uk: {
        languageName: 'Ukrainian',
        languageNameLocalized: 'Українська',
        contributors: [ 'Ucrash' ],
        nuxify: dictionary_uk,
    },
    ru: {
        languageName: 'Russian',
        languageNameLocalized: 'Русский',
        contributors: [ 'Ucrash' ],
        nuxify: dictionary_ru,
    },
}


export const DEFAULT_SETTINGS: ExtensionSettings = {
    lang: '!auto',
}