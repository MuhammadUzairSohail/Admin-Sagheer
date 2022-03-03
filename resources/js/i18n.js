
import { createI18n } from "vue3-i18n";
import * as en from "./locales/en.json";
import * as ur from "./locales/ur.json";

const messages = {
  en: en,
  ur: ur
};

const i18n = createI18n({
  locale: 'en',
  messages: messages,
});

export default i18n;