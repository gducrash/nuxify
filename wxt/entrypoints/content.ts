import { initNuxify } from "@/components/nux";

export default defineContentScript({
    matches: ['*://*.youtube.com/*'],
    main() {
        initNuxify();
    },
});
