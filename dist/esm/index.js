import { registerPlugin } from "@capacitor/core";
const ContactsPlugin = registerPlugin("NativeBiometric", {
  web: () => import("./web").then((m) => new m.ContactsPluginWeb()),
});
export * from "./definitions";
//# sourceMappingURL=index.js.map
