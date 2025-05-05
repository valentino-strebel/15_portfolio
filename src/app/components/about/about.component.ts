import { Component } from '@angular/core';
import { LanguageService } from '../../shared/language.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  constructor(public languageService: LanguageService) {}

  about = [
    {
      head: { en: 'About me', de: 'Über mich' },
      desc: {
        en: 'At the core of our IT philosophy is a passion for technology and a commitment to excellence in software development. Coding is more than a technical skill — it is a way to create innovative solutions that drive progress and deliver tangible results. We are inspired by the ever-evolving nature of the tech industry, which motivates us to stay ahead of the curve through continuous learning and adaptation. In a world where technology changes rapidly, we are dedicated to staying current with the latest tools, frameworks, and best practices. This ensures we can provide our clients with reliable, scalable, and future-proof solutions. Our goal is not only to meet expectations but to exceed them—offering exceptional service, efficient systems, and a partnership built on trust, expertise, and forward-thinking innovation.',
        de: 'Im Mittelpunkt unserer IT-Philosophie stehen die Leidenschaft für Technologie und das Streben nach Exzellenz in der Softwareentwicklung. Programmieren ist für uns mehr als nur eine technische Fähigkeit — es ist ein Weg, innovative Lösungen zu schaffen, die Fortschritt ermöglichen und messbare Ergebnisse liefern. Die sich ständig weiterentwickelnde Technologiebranche inspiriert uns dazu, kontinuierlich zu lernen und uns neuen Herausforderungen anzupassen. In einer Welt, in der sich Technologien rasant verändern, ist es für uns essenziell, stets auf dem neuesten Stand der Werkzeuge, Frameworks und Best Practices zu bleiben. So stellen wir sicher, dass wir unseren Kunden zuverlässige, skalierbare und zukunftssichere Lösungen anbieten können. Unser Ziel ist es nicht nur, Erwartungen zu erfüllen, sondern sie zu übertreffen — mit herausragendem Service, effizienten Systemen und einer Partnerschaft, die auf Vertrauen, Fachwissen und zukunftsorientierter Innovation basiert.',
      },
      loc: {
        en: 'All services are provided remotely, with on-site visits available to support collaboration and tailored solutions.',
        de: 'Alle Dienstleistungen werden remote erbracht, bei Bedarf ergänzt durch Vor-Ort-Termine zur optimalen Lösungsfindung.',
      },
      learn: {
        en: 'We are committed to continuous learning and open to new technologies, ensuring we deliver modern and future-ready solutions.',
        de: 'Wir stehen für kontinuierliches Lernen und bleiben offen für neue Technologien, um stets moderne, zukunftsfähige Lösungen bieten zu können.',
      },
      solve: {
        en: 'We approach each challenge with analytical thinking, creativity, and persistence—collaborating closely to find the most efficient and elegant solution while learning and improving along the way.',
        de: 'Wir lösen Herausforderungen mit analytischem Denken, Kreativität und Ausdauer — stets im Team, um effiziente und elegante Lösungen zu finden und dabei kontinuierlich dazuzulernen.',
      },
    },
  ];
}
