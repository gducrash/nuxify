import { defineConfig } from 'wxt';
import { PRODUCT_VERSION } from './components/constants';

// See https://wxt.dev/api/config.html
export default defineConfig({
    manifestVersion: 3,
    manifest: {
        name: 'Nuxify',
        version: PRODUCT_VERSION,
        description: 'Takes every Youtube video starting with "I", replaces it with "we", and adds Nux Taku in the thumbnail',
        browser_specific_settings: {
            gecko: {
                id: 'nuxify@gducrash',
                strict_min_version: '60.0',
            }
        },

        permissions: [
            'storage'
        ],
        web_accessible_resources: [
            {
                "matches": [
                    "*://*.youtube.com/*"
                ],
                "resources": [
                    "media/*",
                    "audio/*",
                ]
            },
        ],
    },
});
