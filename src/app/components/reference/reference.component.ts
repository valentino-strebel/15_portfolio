import { Component } from '@angular/core';

@Component({
  selector: 'app-reference',
  standalone: true,
  imports: [],
  templateUrl: './reference.component.html',
  styleUrl: './reference.component.scss',
})
export class ReferenceComponent {
  currentIndex: number = 0;

  currentLanguage: 'en' | 'de' = 'en';

  galleryItems = [
    {
      image: '../assets/img/company_img/spryflash.png',
      company: 'SpryFlash GmbH',
      text: {
        en: 'Mr. Strebel impressed with his efficient, self-reliant work style and strong professional expertise. In his role as Project Manager, he successfully led complex IT projects and applied his technical knowledge to great effect.',
        de: 'Herr Strebel überzeugte durch seine effiziente, eigenverantwortliche Arbeitsweise und hohe Fachkompetenz. In seiner Rolle als Projektmanager steuerte er komplexe IT-Projekte souverän und brachte sein technisches Know-how gewinnbringend ein.',
      },
    },
    {
      image: '../assets/img/company_img/novilio.png',
      company: 'Novilio Consulting GmbH & Co.KG',
      text: {
        en: 'Mr. Strebel impressed with his structured, detail-oriented approach and solid methodological expertise in requirements engineering. In client projects, he took responsibility for quality assurance, process consulting, and agile coordination.',
        de: 'Herr Strebel überzeugte durch seine strukturierte, sorgfältige Arbeitsweise und sein sicheres methodisches Vorgehen im Requirements Engineering. In Kundenprojekten übernahm er Verantwortung für die Qualitätssicherung, Prozessberatung und agile Koordination.',
      },
    },
  ];
}
