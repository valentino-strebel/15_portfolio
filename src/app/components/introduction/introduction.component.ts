import { Component, AfterViewInit } from '@angular/core';
import { LanguageService } from '../../shared/language.service';
import { StandardButtonComponent } from '../../shared/standard-button/standard-button.component';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../shared/scroll.service';
import AOS from 'aos';

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [StandardButtonComponent, CommonModule],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss',
})
export class IntroductionComponent implements AfterViewInit {
  constructor(
    public languageService: LanguageService,
    public scrollService: ScrollService
  ) {}
  ngAfterViewInit() {
    AOS.refresh();
  }

  intro = [
    {
      first: { en: 'We are', de: 'Wir sind' },
      second: 'STREBEL COMPANY',
      third: {
        en: 'Business Consulting & Software Development',
        de: 'Business Consulting & Software Development',
      },
      button: { en: 'Contact us!', de: 'Schreiben Sie uns!' },
      mail: 'office@strebel-company.de',
    },
  ];
}
