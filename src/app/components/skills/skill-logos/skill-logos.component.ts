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
      image: '../../assets/img/icons/icon_plain/free/project.svg',
      text: 'Project Management',
    },
    {
      image: '../../assets/img/icons/icon_plain/free/analysis.svg',
      text: 'Business Analysis',
    },
    {
      image: '../../assets/img/icons/icon_plain/free/process.svg',
      text: 'Process Management',
    },
    {
      image: '../../assets/img/icons/icon_plain/free/development.svg',
      text: 'Software Development',
    },
    {
      image: '../../assets/img/icons/icon_plain/free/requirements.svg',
      text: 'Requirements Engineering',
    },
  ];
}
