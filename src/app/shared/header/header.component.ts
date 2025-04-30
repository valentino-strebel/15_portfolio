import { Component } from '@angular/core';
import { CompanyLogoComponent } from '../company-logo/company-logo.component';
import { LanguageService } from '../language.service';
import { ScrollService } from '../scroll.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CompanyLogoComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(
    public languageService: LanguageService,
    public scrollService: ScrollService
  ) {}

  headerBtn = [
    {
      about: { en: 'About Me', de: 'Über mich' },
      skill: { en: 'Skills', de: 'Qualifikationen' },
      port: { en: 'Portfolio', de: 'Portfolio' },
      contact: { en: 'Contact', de: 'Kontakt' },
    },
  ];
}
