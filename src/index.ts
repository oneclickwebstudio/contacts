import { registerPlugin } from "@capacitor/core";

import type { ContactsPlugin } from "./definitions";

const Contacts = registerPlugin<ContactsPlugin>("CapContacts", {
  web: () => import("./web").then((m) => new m.ContactsPluginWeb()),
});

export * from "./definitions";
export { Contacts };
