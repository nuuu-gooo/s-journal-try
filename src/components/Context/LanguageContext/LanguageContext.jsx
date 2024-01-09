import { createContext, useState } from "react";
import { IntlProvider } from "react-intl";
import en from "../../../Languages/en.json";
import de from "../../../Languages/de.json";

export const LanguageContext = createContext({});

export const LANGUAGES = {
  GERMAN: "de",
  ENGLISH: "en",
};

export const destrucutredJSONLanguages = { en, de };

export const LanguageContextProvider = ({ children }) => {
  const [locale, setLocale] = useState(LANGUAGES.GERMAN);

  const toggleLangauge = () => {
    if (locale === LANGUAGES.ENGLISH) {
      setLocale(LANGUAGES.GERMAN);
    } else if (locale === LANGUAGES.GERMAN) {
      setLocale(LANGUAGES.ENGLISH);
    }
  };

  console.log(locale);
  return (
    <LanguageContext.Provider value={{ locale, setLocale, toggleLangauge }}>
      <IntlProvider
        messages={destrucutredJSONLanguages[locale]}
        locale={locale}
        defaultLocale="ENGLISH"
      >
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};
