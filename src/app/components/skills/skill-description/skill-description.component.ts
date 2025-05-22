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
        en: 'We build modern, responsive web applications using HTML, CSS, JavaScript, and TypeScript. Leveraging Angular, Firebase, and REST APIs, we deliver dynamic, full-stack solutions. Guided by Scrum methodologies and Material Design principles, we focus on clean, intuitive user experiences.',
        de: 'Wir entwickeln moderne, responsive Webanwendungen mit HTML, CSS, JavaScript und TypeScript. Durch den Einsatz von Angular, Firebase und REST-APIs realisieren wir dynamische Full-Stack-Lösungen. Gestützt auf Scrum-Methoden und Material Design-Prinzipien schaffen wir klare, benutzerzentrierte Erlebnisse.',
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
        en: 'Driven by curiosity and a passion for technology, we constantly explore new frameworks and programming languages. This keeps us at the cutting edge and allows us to bring fresh ideas to every project.',
        de: 'Aus Neugier und Begeisterung für Technologie erkunden wir ständig neue Frameworks und Programmiersprachen. So bleiben wir am Puls der Zeit und bringen frische Ideen in jedes Projekt ein.',
      },
      buttonText: {
        en: 'Get in touch',
        de: 'Kontakt',
      },
    },
  ];
}
