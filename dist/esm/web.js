import { WebPlugin } from "@capacitor/core";
export class ZipPluginWeb extends WebPlugin {
    constructor() {
        super();
    }
    zip(options) {
        return Promise.resolve({ path: options.destination });
    }
    unZip(options) {
        return Promise.resolve({ path: options.destination });
    }
}
//# sourceMappingURL=web.js.map