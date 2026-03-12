"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Lang = "de" | "en";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "de",
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("de");

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Lang | null;
    if (stored === "de" || stored === "en") {
      setLangState(stored);
    } else {
      const browserLang = navigator.language ?? "";
      setLangState(browserLang.startsWith("de") ? "de" : "en");
    }
  }, []);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
