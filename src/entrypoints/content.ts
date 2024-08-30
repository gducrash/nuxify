import { initNuxify } from "@/components/dom";
import { getSettings } from "@/components/util";

export default defineContentScript({
    matches: [
        '*://youtube.com/*',
        '*://www.youtube.com/*',
    ],
    main() {
        (async() => {
            const settings = await getSettings();
            initNuxify(settings);
        })();
    },
});
