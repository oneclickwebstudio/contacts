import { registerPlugin } from "@capacitor/core";

import type { ContactsPlugin } from "./definitions";

const ContactsPlugin = registerPlugin<ContactsPlugin>("NativeBiometric", {
  web: () => import("./web").then((m) => new m.ContactsPluginWeb()),
});

export * from "./definitions";
export { ContactsPlugin };
