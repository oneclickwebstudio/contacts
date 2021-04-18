import { registerPlugin } from "@capacitor/core";
const Contacts = registerPlugin("NativeBiometric", {
  web: () => import("./web").then((m) => new m.ContactsPluginWeb()),
});
export * from "./definitions";
export { Contacts };
//# sourceMappingURL=index.js.map
