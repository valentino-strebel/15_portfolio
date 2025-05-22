import { Component, AfterViewInit } from '@angular/core';
import { LanguageService } from '../../shared/language.service';
import * as AOS from 'aos';

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
      head: { en: 'About us', de: 'Über uns' },
      desc: {
        en: 'We’re passionate about technology and committed to building smart, reliable software. To stay ahead in a fast-changing industry, we constantly learn, adapt, and use the latest tools and best practices. Our goal is to deliver scalable solutions, exceed expectations, and build lasting partnerships based on trust and forward-thinking.',
        de: 'Wir sind begeistert von Technologie und entwickeln intelligente, zuverlässige Softwarelösungen. In einer sich schnell wandelnden Branche bleiben wir durch kontinuierliches Lernen und modernste Tools immer am Puls der Zeit. Unser Ziel: skalierbare Lösungen liefern, Erwartungen übertreffen und langfristige Partnerschaften aufbauen – basierend auf Vertrauen und zukunftsorientiertem Denken.',
      },
      loc: {
        en: 'All services are provided remotely, with on-site visits available to support collaboration and customized solutions.',
        de: 'Alle Dienstleistungen werden remote erbracht; Vor-Ort-Termine sind möglich, um Zusammenarbeit und individuelle Lösungen zu unterstützen.',
      },
      learn: {
        en: 'We embrace continuous learning and new technologies to deliver modern, future-ready solutions.',
        de: 'Wir setzen auf kontinuierliches Lernen und neue Technologien, um moderne und zukunftssichere Lösungen zu bieten.',
      },
      solve: {
        en: 'We tackle every challenge with analytical thinking, creativity, and persistence—working closely together to find efficient, elegant solutions while continually learning and improving.',
        de: 'Wir gehen jede Herausforderung mit analytischem Denken, Kreativität und Ausdauer an – und arbeiten eng zusammen, um effiziente und elegante Lösungen zu finden, während wir stetig dazulernen und uns weiterentwickeln.',
      },
    },
  ];
}
