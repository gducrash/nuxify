import { getStringSeed, getPageLanguage } from './util';
import { DICTIONARY } from './constants';
import type { Language } from './types';

// the fun part! 
export function nuxifyString (oldTitle: string, language?: Language) {

    const targetDictionary = DICTIONARY[language ?? getPageLanguage()];
    const newTitle = targetDictionary.nuxify(oldTitle);

    return {
        newTitle,
        isDifferent: newTitle != oldTitle,
        seed: getStringSeed(newTitle, 5),
    };

}
