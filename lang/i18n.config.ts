import zhHK from "./locales/zh-HK.json";
import zhCN from "./locales/zh-CN.json";
import kr from "./locales/ko-KR.json";
import en from "./locales/en-US.json";
import jp from "./locales/ja-JP.json";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "zh-HK",
  messages: { "zh-HK": zhHK, "zh-CN": zhCN, "ja-JP": jp, "ko-KR": kr, en },
  fallbackLocale: "zh-HK",
  // Preferences
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: "i18n_redirected",
    alwaysRedirect: true,
    fallbackLocale: "zh-HK",
    redirectOn: "root",
  },
}));
