import { setupObservers } from "@/components/dom";

export default defineContentScript({
    matches: ['*://*.youtube.com/*'],
    main() {
        setupObservers();
    },
});
