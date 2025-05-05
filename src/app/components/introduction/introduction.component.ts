import { Component } from '@angular/core';
import { LanguageService } from '../../shared/language.service';
import { StandardButtonComponent } from '../../shared/standard-button/standard-button.component';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../shared/scroll.service';

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [StandardButtonComponent, CommonModule],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss',
})
export class IntroductionComponent {
  constructor(
    public languageService: LanguageService,
    public scrollService: ScrollService
  ) {}

  intro = [
    {
      first: { en: 'I am', de: 'Ich bin' },
      second: 'Valentino Strebel',
      third: { en: 'Software Developer', de: 'Softwareentwickler' },
      button: { en: "Let's talk", de: 'Schreiben Sie uns' },
      mail: 'office@strebel-company.de',
    },
  ];
}
