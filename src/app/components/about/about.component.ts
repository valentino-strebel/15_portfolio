import { Component, AfterViewInit } from '@angular/core';
import { LanguageService } from '../../shared/language.service';
import AOS from 'aos';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements AfterViewInit {
  constructor(public languageService: LanguageService) {}

  ngAfterViewInit() {
    AOS.refresh();
  }

  about = [
    {
      head: { en: 'Our mission', de: 'Unsere Mission' },
      desc: {
        en: 'We shape projects, processes, and requirements with clarity and structure. Through continuous learning and modern methods, we stay ahead. Our goal: to manage projects successfully, exceed expectations, and build lasting partnerships.',
        de: 'Wir gestalten Projekte, Prozesse und Anforderungen mit Klarheit und Struktur. Durch kontinuierliches Lernen und moderne Methoden bleiben wir am Puls der Zeit. Unser Ziel: Projekte erfolgreich steuern, Erwartungen übertreffen und langfristige Partnerschaften aufbauen.',
      },
      loc: {
        en: 'We work flexibly – remotely and on-site, to support collaboration and tailored solutions.',
        de: 'Wir arbeiten flexibel – remote und vor Ort, um Zusammenarbeit und individuelle Lösungen zu unterstützen.',
      },
      learn: {
        en: 'We rely on continuous learning and modern technologies to create future-proof results.',
        de: 'Wir setzen auf kontinuierliches Lernen und moderne Technologien, um zukunftssichere Ergebnisse zu schaffen.',
      },
      solve: {
        en: 'We approach every challenge with analytical thinking, creativity, and perseverance – developing efficient and elegant solutions together.',
        de: 'Jede Herausforderung gehen wir mit analytischem Denken, Kreativität und Ausdauer an – und entwickeln so gemeinsam effiziente und elegante Lösungen.',
      },
    },
  ];
}
