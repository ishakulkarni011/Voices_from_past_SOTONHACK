import { create } from 'zustand';

export interface Language {
  code: string; label: string; native: string; flag: string;
}

const DEFAULT: Language = { code: 'en', label: 'English', native: 'English', flag: '🇬🇧' };

interface LangStore {
  selected:    Language;
  setLanguage: (lang: Language) => void;
  loadSaved:   () => void;
}

export const useLanguageStore = create<LangStore>((set) => ({
  selected:    DEFAULT,
  setLanguage: (lang) => set({ selected: lang }),
  loadSaved:   () => {},
}));