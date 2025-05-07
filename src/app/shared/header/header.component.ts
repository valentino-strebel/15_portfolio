import { Component } from '@angular/core';
import { CompanyLogoComponent } from '../company-logo/company-logo.component';
import { LanguageService } from '../language.service';
import { ScrollService } from '../scroll.service';
import { CommonModule } from '@angular/common';
import { DisplayService } from '../display.service';
import { RouterLink } from '@angular/router';
type Section = 'about' | 'skill' | 'port' | 'contact' | null;

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CompanyLogoComponent, CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(
    public languageService: LanguageService,
    public scrollService: ScrollService,
    public displayService: DisplayService
  ) {}

  currentSelection: Section = null;

  currentImage: number = 0;

  interval: any;

  selectionChange(comp: Section) {
    this.currentSelection = comp;
  }

  images: string[] = [
    '../../../assets/img/icons/burger/burger1.svg',
    '../../../assets/img/icons/burger/burger2.svg',
    '../../../assets/img/icons/burger/burger3.svg',
    '../../../assets/img/icons/burger/burger4.svg',
  ];

  headerBtn = [
    {
      about: { en: 'About Me', de: 'Über mich' },
      skill: { en: 'Skills', de: 'Qualifikationen' },
      port: { en: 'Portfolio', de: 'Portfolio' },
      contact: { en: 'Contact', de: 'Kontakt' },
    },
  ];

  nextImage() {
    if (this.interval) return; //
    this.interval = setInterval(() => {
      if (this.currentImage < this.images.length - 1) {
        this.currentImage++;
      } else {
        clearInterval(this.interval);
        this.interval = null;
      }
    }, 80);
  }
}
