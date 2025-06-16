import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../shared/language.service';

@Component({
  selector: 'app-impress',
  standalone: true,
  imports: [],
  templateUrl: './impress.component.html',
  styleUrls: ['./impress.component.scss'],
})
export class ImpressComponent implements OnInit {
  ngOnInit() {
    window.scrollTo({ top: 0 });
  }
  constructor(public languageService: LanguageService) {}

  data = {
    name: 'Valentino Strebel',
    street: 'Dorfstraße 12a',
    plz: 85375,
    place: 'Neufahrn b. Freising',
    email: 'office@strebel-company.de',
    tel: '+49 171 1505613',
    ust: {
      id: { de: 'USt. ID:', en: 'VAT ID:' },
    },
    country: { land: { de: 'Deutschland', en: 'Germany' } },
  };

  owner = { name: { de: 'Inhaber:', en: 'Sole Proprietor:' } };

  rstv = {
    disclaimer: {
      de: 'Verantwortlich für den Inhalt nach §55 Abs.2 RStV:',
      en: 'Responsible for content according to § 55 para. 2 RStV:',
    },
  };
}
