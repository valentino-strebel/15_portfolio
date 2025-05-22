import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';
import { LanguageService } from '../../shared/language.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-reference',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reference.component.html',
  styleUrl: './reference.component.scss',
})
export class ReferenceComponent implements AfterViewInit {
  constructor(public languageService: LanguageService) {}

  ngAfterViewInit() {
    AOS.refresh();
  }

  fade: boolean = false;

  currentIndex: number = 0;

  currentSymbol: string = 'symbol-' + this.currentIndex;

  galleryItems = [
    {
      image: '../assets/img/company_img/spryflash.png',
      company: {
        en: 'SpryFlash LLC - Salzburg, Austria',
        de: 'SpryFlash GmbH - Salzburg, Österreich',
      },
      text: {
        en: 'Mr. Strebel impressed with his efficient, self-reliant work style and strong professional expertise. In his role as Project Manager, he successfully led complex IT projects and applied his technical knowledge to great effect.',
        de: 'Herr Strebel überzeugte durch seine effiziente, eigenverantwortliche Arbeitsweise und hohe Fachkompetenz. In seiner Rolle als Projektmanager steuerte er komplexe IT-Projekte souverän und brachte sein technisches Know-how gewinnbringend ein.',
      },
    },
    {
      image: '../assets/img/company_img/novilio.png',
      company: {
        en: 'Novilio Consulting LLC - Munich, Germany',
        de: 'Novilio Consulting GmbH - München, Deutschland',
      },
      text: {
        en: 'Mr. Strebel impressed with his structured, detail-oriented approach and solid methodological expertise in requirements engineering. In client projects, he took responsibility for quality assurance, process consulting, and agile coordination.',
        de: 'Herr Strebel überzeugte durch seine strukturierte, sorgfältige Arbeitsweise und sein sicheres methodisches Vorgehen im Requirements Engineering. In Kundenprojekten übernahm er Verantwortung für die Qualitätssicherung, Prozessberatung und agile Koordination.',
      },
    },
    {
      image: '../assets/img/company_img/aldi.png',
      company: {
        en: 'ALDI Süd Holding - Salzburg, Austria',
        de: 'ALDI Süd Holding - Salzburg, Österreich',
      },
      text: {
        en: 'Mr. Strebel possesses profound professional expertise in requirements assessment. He is able to maintain an overview even in very stressful situations and to initiate target-oriented measures taking into account all relevant developments.',
        de: 'Herr Strebel verfügt über fundierte fachliche Expertise in der Anforderungsanalyse. Er ist auch in sehr stressigen Situationen in der Lage, den Überblick zu behalten und unter Berücksichtigung aller relevanten Entwicklungen zielgerichtete Maßnahmen einzuleiten.',
      },
    },
  ];
  nextItem(): void {
    this.triggerFade(() => {
      this.currentIndex = (this.currentIndex + 1) % this.galleryItems.length;
      this.setCurrentSymbol(this.currentIndex);
    });
  }

  prevItem(): void {
    this.triggerFade(() => {
      this.currentIndex =
        (this.currentIndex - 1 + this.galleryItems.length) %
        this.galleryItems.length;
      this.setCurrentSymbol(this.currentIndex);
    });
  }

  triggerFade(callback: () => void): void {
    this.fade = true;
    setTimeout(() => {
      callback();
      this.fade = false;
    }, 200);
  }
  setCurrentSymbol(myI: number) {
    this.currentSymbol = 'symbol-' + myI;
  }
}
