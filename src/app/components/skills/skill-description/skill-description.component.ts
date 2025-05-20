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
        en: 'My Skills',
        de: 'Meine Skills',
      },
      desc: {
        en: 'I build modern, responsive web apps using HTML, CSS, JavaScript, and TypeScript. With Angular, Firebase, and REST APIs, I create dynamic, full-stack solutions. I follow Scrum methods and apply Material Design principles to deliver clean, user-focused experiences.',
        de: 'Ich entwickle moderne, responsive Webanwendungen mit HTML, CSS, JavaScript und TypeScript. Mit Angular, Firebase und REST-APIs erstelle ich dynamische Full-Stack-Lösungen. Ich folge den Scrum-Methoden und wende die Prinzipien des Material Designs an, um saubere, benutzerorientierte Erlebnisse zu liefern.',
      },

      subline: {
        en: 'The key to',
        de: 'Der Schlüssel zu',
      },
      sublineColor: {
        en: ' my success',
        de: ' meinem Erfolg',
      },
      subdesc: {
        en: 'Driven by curiosity and passion for technology, I am always learning new frameworks and programming languages to stay at the cutting edge and bring fresh ideas to every project.',
        de: 'Aus Neugier und Begeisterung für Technologie lerne ich ständig neue Frameworks und Programmiersprachen, um stets am Puls der Zeit zu bleiben und frische Ideen in jedes Projekt einzubringen.',
      },
      buttonText: {
        en: 'Get in touch',
        de: 'Kontakt',
      },
    },
  ];
}
