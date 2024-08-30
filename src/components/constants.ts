import dictionary_en from './dictionary/english';
import dictionary_es from './dictionary/spanish';
import dictionary_uk from './dictionary/ukrainian';
import dictionary_ru from './dictionary/russian';
import dictionary_fr from './dictionary/french';

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
    fr: {
        languageName: 'French',
        languageNameLocalized: 'Français',
        contributors: [ 'ivelter' ],
        nuxify: dictionary_fr,
    }
}


export const DEFAULT_SETTINGS: ExtensionSettings = {
    lang: '!auto',
    
    featureLiveDubbingEnabled: true,
    featureLiveDubbingSidechainCompression: true,
    featureLiveDubbingThud: true,
}


export const LIVE_DUBBING_TYPES = {
    we: ['i'],
    weare: ['i\'m', 'im', 'i\'ve', 'i\'ll', 'imma'],
    our: ['my'],
    ours: ['mine', 'mine\'s'],
    ourselves: ['myself'],
    us: ['me'],
}

export const LIVE_DUBBING_OFFSET_MS = -200;
export const SIDECHAIN_COMPRESSION_ATTACK = 50;
export const SIDECHAIN_COMPRESSION_RELEASE = 100;