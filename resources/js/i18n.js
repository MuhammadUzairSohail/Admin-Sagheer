
import { createI18n } from "vue3-i18n";

const messages = {
  en: {
      'message': 'Hello, world!!',
    // menu: ["Home"],
    // test: "test",
    // object: {
    //   a: "1233",
    // },
    // parse: "welcome to {name}",
    // parses: {
    //   a: "welcome to {name}",
    // },
  },
  ur: {
    'message': 'ہیلو دنیا!',
  },
};

const i18n = createI18n({
    //get locale from browser

  locale: 'en',
  messages: messages,
});

export default i18n;