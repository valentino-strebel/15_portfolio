import { Component, Injectable } from '@angular/core';
import { CompanyLogoComponent } from '../company-logo/company-logo.component';
import { LanguageService } from '../language.service';
import { ScrollService, Section } from '../scroll.service';
import { CommonModule } from '@angular/common';
import { DisplayService } from '../display.service';
import { RouterLink } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
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

  currentImage: number = 0;

  interval: any;

  direction = 1;

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

  changeDirection() {
    if (this.direction === -1) {
      this.nextImage();
    }
  }

  nextImage() {
    if (this.interval) return;

    this.direction = this.direction || 1;

    this.interval = setInterval(() => {
      if (this.direction === 1 && this.currentImage < this.images.length - 1) {
        this.currentImage++;
        document.body.style.overflow = 'hidden';
      } else if (this.direction === -1 && this.currentImage > 0) {
        this.currentImage--;
        document.body.style.overflow = 'visible';
      } else {
        clearInterval(this.interval);
        this.interval = null;
        this.direction *= -1;
      }
    }, 80);
  }
}
