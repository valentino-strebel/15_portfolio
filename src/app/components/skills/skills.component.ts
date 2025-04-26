import { Component } from '@angular/core';
import { StandardButtonComponent } from '../../shared/standard-button/standard-button.component';
import { SkillLogosComponent } from './skill-logos/skill-logos.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [StandardButtonComponent, SkillLogosComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {}
