import { Component } from '@angular/core';
import { SkillLogosComponent } from './skill-logos/skill-logos.component';
import { SkillDescriptionComponent } from './skill-description/skill-description.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillDescriptionComponent, SkillLogosComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {}
