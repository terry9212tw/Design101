import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./assets/locales/en.json"; 
import tw from "./assets/locales/tw.json";


const resources = {
  en: {
    translation: en,
  },
  tw: {
    translation: tw,
  },
};

i18n.use(initReactI18next).init({
  resources, // 會是所有翻譯資源
  fallbackLng: "tw", // 如果當前切換的語言沒有對應的翻譯則使用這個語言
  lng: "tw", // 預設語言
  interpolation: {
    // 是否要讓字詞 escaped 來防止 xss 攻擊，這裡因為 React.js 已經做了，就設成 false即可
    escapeValue: false,
  },
});

export default i18n;