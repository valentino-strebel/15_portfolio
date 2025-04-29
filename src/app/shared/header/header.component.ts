import { Component } from '@angular/core';
import { CompanyLogoComponent } from '../company-logo/company-logo.component';
import { LanguageService } from '../language.service';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CompanyLogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(
    public languageService: LanguageService,
    public scrollService: ScrollService
  ) {}

  ngOnInit(): void {
    this.setPageLanguage();
  }

  setPageLanguage() {
    let english = document.getElementById('btnEng');
    let german = document.getElementById('btnGer');
    if (this.languageService.currentLanguage == 'en') {
      english?.classList.add('activeLang');
      german?.classList.remove('activeLang');
    } else {
      english?.classList.remove('activeLang');
      german?.classList.add('activeLang');
    }
  }
}
