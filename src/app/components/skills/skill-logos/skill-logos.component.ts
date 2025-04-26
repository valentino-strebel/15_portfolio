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
  images: string[] = [
    '../../assets/img/icons/icon_text/HTML_icon.svg',
    '../../assets/img/icons/icon_text/CSS_icon.svg',
    '../../assets/img/icons/icon_text/JS_icon.svg',
    '../../assets/img/icons/icon_text/TS_icon.svg',
    '../../assets/img/icons/icon_text/ANG_icon.svg',
    '../../assets/img/icons/icon_text/FIRE_icon.svg',
    '../../assets/img/icons/icon_text/API_icon.svg',
    '../../assets/img/icons/icon_text/GIT_icon.svg',
    '../../assets/img/icons/icon_text/mat_des_icon.svg',
    '../../assets/img/icons/icon_text/SCRUM_icon.svg',
    '../../assets/img/icons/icon_text/cont_learn_icon.svg',
  ];
}
