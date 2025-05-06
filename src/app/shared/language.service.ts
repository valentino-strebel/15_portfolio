import { Injectable } from '@angular/core';
type Language = 'de' | 'en';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  currentLanguage: 'en' | 'de' = 'en';

  langChange(language: Language) {
    this.currentLanguage = language;
  }
}
