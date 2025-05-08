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
    this.isWideScreen = window.innerWidth >= 1100;
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
        en: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
        de: 'Aufgabenmanager inspiriert vom Kanban-System. Erstelle und organisiere Aufgaben per Drag-and-Drop, weise Benutzer und Kategorien zu.',
      },
      tech: 'HTML | CSS | JS | Firebase | Agile',
      gameUrl: 'url1',
      gitUrl: 'https://github.com/vale-cannelloni/join-415',
    },
    {
      img: '../../assets/img/display/pollo.svg',
      name: 'El Pollo Loco',
      desc: {
        en: 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and hot-sauce bottles to fight against the Boss Chicken.',
        de: 'Ein einfaches Jump-and-Run-Spiel auf objektorientierter Basis. Hilf Pepe, Münzen und Flaschen mit scharfer Soße zu finden, um gegen das Boss-Huhn zu kämpfen.',
      },
      tech: 'HTML | CSS | JS | Object Oriented',
      gameUrl: 'url1',
      gitUrl: 'https://github.com/vale-cannelloni/11_pollo_loco',
    },
    {
      img: '../../assets/img/display/pokedex.svg',
      name: 'Pokédex',
      desc: {
        en: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
        de: 'Basierend auf der PokéAPI – eine einfache Bibliothek, die Pokémon-Informationen bereitstellt und katalogisiert.',
      },
      tech: 'HTML | CSS | JS | API',
      gameUrl: 'url1',
      gitUrl: 'https://github.com/vale-cannelloni/9_pokedex',
    },
  ];
}
