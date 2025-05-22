import { Component, HostListener, OnInit } from '@angular/core';
import { PortTextComponent } from './port-text/port-text.component';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../shared/language.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [PortTextComponent, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent implements OnInit {
  constructor(public languageService: LanguageService) {}

  isWideScreen: boolean = false;

  ngOnInit() {
    this.checkScreenWidth();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenWidth();
  }

  private checkScreenWidth() {
    if (typeof window !== 'undefined') {
      this.isWideScreen = window.innerWidth >= 1100;
    }
  }
  subheader = [
    {
      line: {
        en: 'Explore a selection of my work here - Interact with projects to see my skills in action.',
        de: 'Entdecke eine Auswahl meiner Arbeiten – interagiere mit den Projekten, um meine Fähigkeiten in Aktion zu erleben.',
      },
    },
  ];
  projects = [
    {
      img: '../../assets/img/display/join.svg',
      name: 'Join',
      desc: {
        en: 'A task management tool inspired by the Kanban system. Create, organize, and prioritize tasks using intuitive drag-and-drop functionality, with support for assigning users, setting categories, and streamlining your workflow.',
        de: 'Ein Aufgabenmanagement-Tool, inspiriert vom Kanban-System. Erstelle, organisiere und priorisiere Aufgaben mithilfe einer intuitiven Drag-and-Drop-Funktion, weise Benutzer und Kategorien zu und optimiere deinen Arbeitsablauf.',
      },
      tech: 'HTML | CSS | JS | Firebase | Agile',
      gameUrl: 'https://port3.strebel-company.de',
      gitUrl: 'https://github.com/vale-cannelloni/join-415',
    },
    {
      img: '../../assets/img/display/pollo.svg',
      name: 'El Pollo Loco',
      desc: {
        en: 'A simple yet entertaining jump-and-run game built with an object-oriented approach. Help Pepe collect coins and hot-sauce bottles as he navigates through challenges to prepare for an epic showdown with the Boss Chicken.',
        de: 'Ein einfaches, aber unterhaltsames Jump-and-Run-Spiel, das auf einem objektorientierten Ansatz basiert. Hilf Pepe, Münzen und Flaschen mit scharfer Soße zu sammeln, während er sich durch verschiedene Herausforderungen kämpft, um sich auf das epische Duell mit dem Boss Chicken vorzubereiten.',
      },
      tech: 'HTML | CSS | JS | Object Oriented',
      gameUrl: 'https://port1.strebel-company.de',
      gitUrl: 'https://github.com/vale-cannelloni/11_pollo_loco',
    },
    {
      img: '../../assets/img/display/pokedex.svg',
      name: 'Pokédex',
      desc: {
        en: 'Based on the PokéAPI, this simple library provides structured access to a wide range of Pokémon data, including stats, abilities, and evolutions. It serves as a lightweight tool for cataloguing and retrieving Pokémon information in a clear and organized way.',
        de: 'Basierend auf der PokéAPI bietet diese einfache Bibliothek strukturierten Zugriff auf eine Vielzahl von Pokémon-Daten, darunter Statuswerte, Fähigkeiten und Entwicklungen. Sie dient als schlankes Tool zur Katalogisierung und übersichtlichen Darstellung von Pokémon-Informationen.',
      },
      tech: 'HTML | CSS | JS | API',
      gameUrl: 'https://port2.strebel-company.de',
      gitUrl: 'https://github.com/vale-cannelloni/9_pokedex',
    },
    {
      img: '../../assets/img/display/website.png',
      name: 'Website Development',
      desc: {
        en: 'This website was developed with a strong emphasis on modern web standards, performance, and maintainability. Built using Angular and a modular architecture, it ensures scalability and a seamless user experience across devices. The layout and styling follow contemporary design guidelines, with clean, responsive components crafted using SCSS and semantic HTML. In addition to development, I handled all aspects of deployment, including SFTP setup and web hosting configuration, ensuring a secure and efficient launch process.',
        de: 'Diese Website wurde mit einem klaren Fokus auf moderne Webstandards, Performance und Wartbarkeit entwickelt. Durch den Einsatz von Angular in einer modularen Architektur ist sie skalierbar und bietet eine nahtlose Benutzererfahrung auf allen Geräten. Layout und Styling orientieren sich an aktuellen Designrichtlinien und wurden mit SCSS und semantischem HTML umgesetzt. Neben der eigentlichen Entwicklung habe ich auch die Einrichtung des SFTP-Zugangs sowie die Konfiguration des Webhostings übernommen, um eine sichere und effiziente Bereitstellung zu gewährleisten.',
      },
      tech: 'Angular | TypeScript | SCSS | HTML | SFTP | Web Hosting Configuration',
      gameUrl: 'https://www.strebel-company.de',
      gitUrl: 'https://github.com/vale-cannelloni/15_portfolio',
    },
  ];
}
