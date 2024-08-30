import mediaNuxPic from '~/public/media/nux01.jpg';

import { getSettingsItem, updateSettings } from '@/components/util';
import { DICTIONARY } from '@/components/constants';
import type { Language } from '@/components/types';


// live dubbing

const settingsItemLiveDubbingEnabled              = document.getElementById('settingsItem_featureLiveDubbingEnabled') as HTMLInputElement;
const settingsItemLiveDubbingSidechainCompression = document.getElementById('settingsItem_featureLiveDubbingSidechainCompression') as HTMLInputElement;
const settingsItemLiveDubbingThud                 = document.getElementById('settingsItem_featureLiveDubbingThud') as HTMLInputElement;

function updateLiveDubbingSettingsVisibility () {
    if (settingsItemLiveDubbingEnabled.checked) {
        settingsItemLiveDubbingSidechainCompression.disabled = false;
        settingsItemLiveDubbingThud.disabled = false;

        settingsItemLiveDubbingSidechainCompression.parentElement?.classList.remove('disabled');
        settingsItemLiveDubbingThud.parentElement?.classList.remove('disabled');
    } else {
        settingsItemLiveDubbingSidechainCompression.disabled = true;
        settingsItemLiveDubbingThud.disabled = true;

        settingsItemLiveDubbingSidechainCompression.parentElement?.classList.add('disabled');
        settingsItemLiveDubbingThud.parentElement?.classList.add('disabled');
    }
}

settingsItemLiveDubbingEnabled.onchange = () => {
    updateSettings('featureLiveDubbingEnabled', settingsItemLiveDubbingEnabled.checked);
    updateLiveDubbingSettingsVisibility();
}

settingsItemLiveDubbingSidechainCompression.onchange = () => {
    updateSettings('featureLiveDubbingSidechainCompression', settingsItemLiveDubbingSidechainCompression.checked);
}
settingsItemLiveDubbingThud.onchange = () => {
    updateSettings('featureLiveDubbingThud', settingsItemLiveDubbingThud.checked);
}


// Flags

const settingsItemFlagEveryThumbnail   = document.getElementById('settingsItem_flagEveryThumbnail') as HTMLInputElement;
const settingsItemFlagOnlyWtfThumbnail = document.getElementById('settingsItem_flagOnlyWtfThumbnail') as HTMLInputElement;
const settingsItemFlagOnlyAffectCards  = document.getElementById('settingsItem_flagOnlyAffectCards') as HTMLInputElement;

settingsItemFlagEveryThumbnail.onchange = () => {
    updateSettings('flagEveryThumbnail', settingsItemFlagEveryThumbnail.checked);
}
settingsItemFlagOnlyWtfThumbnail.onchange = () => {
    updateSettings('flagOnlyWtfThumbnail', settingsItemFlagOnlyWtfThumbnail.checked);
}
settingsItemFlagOnlyAffectCards.onchange = () => {
    updateSettings('flagOnlyAffectCards', settingsItemFlagOnlyAffectCards.checked);
}



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
    elem.checked = true;
});

getSettings().then(settings => {
    settingsItemLiveDubbingEnabled.checked              = settings.featureLiveDubbingEnabled;
    settingsItemLiveDubbingSidechainCompression.checked = settings.featureLiveDubbingSidechainCompression;
    settingsItemLiveDubbingThud.checked                 = settings.featureLiveDubbingThud;

    settingsItemFlagEveryThumbnail.checked   = settings.flagEveryThumbnail;
    settingsItemFlagOnlyWtfThumbnail.checked = settings.flagOnlyWtfThumbnail;
    settingsItemFlagOnlyAffectCards.checked  = settings.flagOnlyAffectCards;

    updateLiveDubbingSettingsVisibility();
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