import { Component } from '@angular/core';
import { StandardButtonComponent } from '../../../shared/standard-button/standard-button.component';
import { ScrollService } from '../../../shared/scroll.service';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../shared/language.service';

@Component({
  selector: 'app-skill-description',
  standalone: true,
  imports: [StandardButtonComponent, CommonModule],
  templateUrl: './skill-description.component.html',
  styleUrl: './skill-description.component.scss',
})
export class SkillDescriptionComponent {
  constructor(
    public scrollService: ScrollService,
    public languageService: LanguageService
  ) {}

  skills = [
    {
      headline: {
        en: 'Built on Skill',
        de: 'Auf Expertise gebaut',
      },
      desc: {
        en: 'We support companies in project and process management, requirements engineering, and business analysis. By combining organizational skills with technical understanding, we create clear structures for sustainable results.',
        de: 'Wir unterstützen Unternehmen in Projekt- und Prozessmanagement, Requirements Engineering und Business Analysis. Dabei verbinden wir Organisationstalent mit technischem Verständnis und schaffen klare Strukturen für nachhaltige Ergebnisse.',
      },

      subline: {
        en: 'The key to',
        de: 'Der Schlüssel zu',
      },
      sublineColor: {
        en: ' our success',
        de: ' unserem Erfolg',
      },
      subdesc: {
        en: 'We stay curious, open to new methods and technologies, and bring fresh ideas to every project.',
        de: 'Wir bleiben neugierig, offen für neue Methoden und Technologien und bringen so frische Ideen in jedes Projekt ein.',
      },
      buttonText: {
        en: 'Get in touch',
        de: 'Kontakt',
      },
    },
  ];
}
