import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skill-logos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-logos.component.html',
  styleUrl: './skill-logos.component.scss',
})
export class SkillLogosComponent {
  movedIndex: number | null = null;

  onMouseEnter(index: number) {
    this.movedIndex = index;
    setTimeout(() => {
      if (this.movedIndex === index) {
        this.movedIndex = null;
      }
    }, 700);
  }

  skills = [
    {
      image: '../../assets/img/icons/icon_plain/front/html_plain.svg',
      text: 'HTML',
    },
    {
      image: '../../assets/img/icons/icon_plain/front/css_plain.svg',
      text: 'CSS',
    },
    {
      image: '../../assets/img/icons/icon_plain/front/js_plain.svg',
      text: 'JavaScript',
    },
    {
      image: '../../assets/img/icons/icon_plain/front/ts_plain.svg',
      text: 'TypeScript',
    },
    {
      image: '../../assets/img/icons/icon_plain/front/ang_plain.svg',
      text: 'Angular',
    },
    {
      image: '../../assets/img/icons/icon_plain/front/fire_plain.svg',
      text: 'Firebase',
    },
    {
      image: '../../assets/img/icons/icon_plain/front/api_plain.svg',
      text: 'Rest Api',
    },
    {
      image: '../../assets/img/icons/icon_plain/front/git_plain.svg',
      text: 'Git',
    },
    {
      image: '../../assets/img/icons/icon_plain/front/mat_des_plain.svg',
      text: 'Material Design',
    },
    {
      image: '../../assets/img/icons/icon_plain/front/scrum_plain.svg',
      text: 'Scrum',
    },
    {
      image: '../../assets/img/icons/icon_plain/front/cont_learn_plain.svg',
      text: 'Continually learning',
    },
  ];
}
