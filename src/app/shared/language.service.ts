import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  currentLanguage: 'en' | 'de' = 'en';

  langEn() {
    this.currentLanguage = 'en';
  }

  langDe() {
    this.currentLanguage = 'de';
  }
}
