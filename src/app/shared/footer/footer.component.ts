import { Component } from '@angular/core';
import { CompanyLogoComponent } from '../company-logo/company-logo.component';
import { ScrollService } from '../scroll.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DisplayService } from '../display.service';
import { LanguageService } from '../language.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CompanyLogoComponent,
    RouterLink,
    RouterLinkActive,
    HeaderComponent,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  constructor(
    public scrollService: ScrollService,
    public displayService: DisplayService,
    public languageService: LanguageService,
    public headerComponent: HeaderComponent
  ) {}

  footer = [
    {
      data: { de: 'Datenschutz', en: 'Privacy Policy' },
      impress: { de: 'Impressum', en: 'About' },
    },
  ];
}
