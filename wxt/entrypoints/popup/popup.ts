import mediaNuxPic from '~/assets/media/nux01.jpg';

import { getSettingsItem, updateSettings } from '@/components/util';
import { DICTIONARY } from '@/components/constants';
import type { Language } from '@/components/types';

// construct language settings html

const settingsItemLangElem = document.getElementById('settingsItem_lang');
const settingsLangOptions = ['!auto', ...Object.keys(DICTIONARY)];

settingsLangOptions.forEach(lang => {
    const data = DICTIONARY[lang as Language];

    const radioElem = document.createElement('input');
    radioElem.type = 'radio';
    radioElem.name = 'settings_lang';
    radioElem.id = `settings_lang_${lang}`;
    radioElem.value = lang;

    const labelElem = document.createElement('label');
    labelElem.htmlFor = radioElem.id;
    labelElem.innerText = lang === '!auto'
        ? 'Detect automatically'
        : `${data.languageNameLocalized} (${data.languageName})`;

    const wrapperElem = document.createElement('div');
    wrapperElem.appendChild(radioElem);
    wrapperElem.appendChild(labelElem);

    radioElem.onchange = e => {
        if (radioElem.checked)
            updateSettings('lang', lang as Language|'!auto');
    }

    settingsItemLangElem?.appendChild(wrapperElem);
});

getSettingsItem('lang').then(lang => {
    const elem = document.getElementById(`settings_lang_${lang}`) as HTMLInputElement;
    console.log(elem, `settings_lang_${lang}`);
    elem.checked = true;
});


// Update footer credits
const footerCreditsTranslationsElem = document.getElementById('footerCreditsTranslations');
Object.values(DICTIONARY).forEach(data => {
    if (data.contributors.length == 1 && data.contributors[0] == 'Ucrash')
        return;

    const spanElem = document.createElement('span');
    spanElem.innerText = `Translated to ${data.languageName} by ${data.contributors.join(', ')}`;

    const brElem = document.createElement('br');

    footerCreditsTranslationsElem?.appendChild(spanElem);
    footerCreditsTranslationsElem?.appendChild(brElem);
});

(document.getElementById("the") as HTMLImageElement).src = mediaNuxPic;