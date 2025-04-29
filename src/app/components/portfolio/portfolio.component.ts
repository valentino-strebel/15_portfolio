import { Component } from '@angular/core';
import { PortTextComponent } from './port-text/port-text.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [PortTextComponent, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  projects = [
    {
      img: '../../assets/img/display/join.svg',
      name: 'Join',
      desc: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      tech: 'HTML | CSS | JS | Firebase | Agile',
      gameUrl: 'url1',
      gitUrl: 'url2',
    },
    {
      img: '../../assets/img/display/pollo.svg',
      name: 'El Pollo Loco',
      desc: 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and hot-sauce bottles to fight against the Boss Chicken.',
      tech: 'HTML | CSS | JS | Object Oriented',
      gameUrl: 'url1',
      gitUrl: 'url2',
    },
    {
      img: '../../assets/img/display/pokedex.svg',
      name: 'Pokédex',
      desc: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      tech: 'HTML | CSS | JS | API',
      gameUrl: 'url1',
      gitUrl: 'url2',
    },
  ];
}
