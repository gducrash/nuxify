import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
    manifestVersion: 3,
    manifest: {
        name: 'Nuxify',
        version: '0.2.0',
        description: 'Takes every Youtube video starting with "I", replaces it with "we", and adds Nux Taku in the thumbnail. Now for Spanish!',
        browser_specific_settings: {
            gecko: {
                id: 'nuxify@gducrash',
                strict_min_version: '60.0',
            }
        },
    },
});
