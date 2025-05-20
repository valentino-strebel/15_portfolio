import { Injectable } from '@angular/core';
type Language = 'de' | 'en';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  currentLanguage: Language = 'en';

  constructor() {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem(
        'appLanguage'
      ) as Language | null;
      if (savedLanguage === 'en' || savedLanguage === 'de') {
        this.currentLanguage = savedLanguage;
      }
    }
  }

  langChange(language: Language) {
    this.currentLanguage = language;
    if (typeof window !== 'undefined') {
      localStorage.setItem('appLanguage', language);
    }
  }
}
