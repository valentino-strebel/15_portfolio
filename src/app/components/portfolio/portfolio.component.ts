import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { PortTextComponent } from './port-text/port-text.component';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../shared/language.service';
import AOS from 'aos';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [PortTextComponent, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent implements OnInit, AfterViewInit {
  constructor(public languageService: LanguageService) {}

  isActive = true;

  isWideScreen: boolean = false;

  ngOnInit() {
    this.checkScreenWidth();
  }

  ngAfterViewInit() {
    AOS.refresh();
  }

  changeBool() {
    this.isActive = !this.isActive;

    if (this.isActive) {
      const element = document.getElementById('portCollection');
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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
        en: '"Discover our portfolio"',
        de: '„Unser Portfolio entdecken“',
      },
    },
  ];
  projects = [
    {
      img: '../../assets/img/display/noteit.png',
      name: 'Note It',
      desc: {
        en: 'Note It is a lightweight notes app designed for both local and cloud-based use. Built to experiment with JSON-style data storage, it uses MariaDB on a Raspberry Pi for local access, and Google Firebase Realtime Database for real-time syncing and public access. It offers a simple interface for creating, editing, and managing notes efficiently.',
        de: 'Note It ist eine leichtgewichtige Notizen-App, die sowohl für den lokalen als auch für den cloudbasierten Einsatz entwickelt wurde. Sie wurde als Experiment zur Nutzung von JSON-ähnlicher Datenspeicherung konzipiert und verwendet MariaDB auf einem Raspberry Pi für den lokalen Zugriff sowie die Google Firebase Realtime Database für die Echtzeitsynchronisation und öffentlichen Zugriff. Die App bietet eine einfache Oberfläche zum Erstellen, Bearbeiten und Verwalten von Notizen.',
      },
      tech: 'HTML | CSS | JS | Node.js | Express | MariaDB | Raspberry Pi | Firebase Realtime DB | Firebase JS SDK',
      gameUrl: 'https://port4.strebel-company.de/index.html',
      gitUrl: 'https://github.com/valentino-strebel/18_note_it',
    },
    {
      img: '../../assets/img/display/join.svg',
      name: 'Join',
      desc: {
        en: 'A task management tool inspired by the Kanban system. Create, organize, and prioritize tasks using intuitive drag-and-drop functionality, with support for assigning users, setting categories, and streamlining your workflow.',
        de: 'Ein Aufgabenmanagement-Tool, inspiriert vom Kanban-System. Erstelle, organisiere und priorisiere Aufgaben mithilfe einer intuitiven Drag-and-Drop-Funktion, weise Benutzer und Kategorien zu und optimiere deinen Arbeitsablauf.',
      },
      tech: 'HTML | CSS | JS | Firebase | Agile',
      gameUrl: 'https://port3.strebel-company.de',
      gitUrl: 'https://github.com/valentino-strebel/join-415',
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
      gitUrl: 'https://github.com/valentino-strebel/11_pollo_loco',
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
      gitUrl: 'https://github.com/valentino-strebel/9_pokedex',
    },
  ];

  website = [
    {
      img: '../../assets/img/display/website_1.png',
      name: { en: 'Modern Web Solutions', de: 'Moderne Weblösungen' },
      desc: {
        en: 'This website was developed by us with a strong focus on modern web standards, performance, and long-term maintainability. Built with Angular and a modular architecture, it offers scalability and a seamless experience across all devices. The layout and styling follow contemporary design principles, using clean, responsive components crafted with SCSS and semantic HTML. Beyond development, we managed the entire deployment process — including SFTP setup and web hosting configuration — to ensure a secure and efficient launch.',
        de: 'Diese Website wurde von uns mit einem klaren Fokus auf moderne Webstandards, Leistung und langfristige Wartbarkeit entwickelt. Mit Angular und einer modularen Architektur aufgebaut, bietet sie Skalierbarkeit und ein nahtloses Nutzererlebnis auf allen Geräten. Layout und Design folgen aktuellen Gestaltungsprinzipien – mit sauberen, responsiven Komponenten, entwickelt mit SCSS und semantischem HTML. Neben der Entwicklung haben wir auch den gesamten Deployment-Prozess übernommen – einschließlich SFTP-Einrichtung und Webhosting-Konfiguration – und so einen sicheren und effizienten Launch gewährleistet.',
      },
      tech: 'Angular | TypeScript | SCSS | HTML | SFTP | Web Hosting Configuration',
      gameUrl: 'https://www.strebel-company.de',
      gitUrl: 'https://github.com/valentino-strebel/15_portfolio',
    },
  ];
}
