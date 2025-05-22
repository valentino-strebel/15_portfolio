import { Component, AfterViewInit } from '@angular/core';
import { CompanyLogoComponent } from '../company-logo/company-logo.component';
import { ScrollService } from '../scroll.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DisplayService } from '../display.service';
import { LanguageService } from '../language.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CompanyLogoComponent, RouterLink, RouterLinkActive],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements AfterViewInit {
  constructor(
    public scrollService: ScrollService,
    public displayService: DisplayService,
    public languageService: LanguageService
  ) {}

  ngAfterViewInit() {
    AOS.refresh();
  }

  footer = [
    {
      data: { de: 'Datenschutz', en: 'Privacy Policy' },
      impress: { de: 'Impressum', en: 'About' },
    },
  ];
}
