import { Component } from '@angular/core';
import { StandardButtonComponent } from '../../../shared/standard-button/standard-button.component';

@Component({
  selector: 'app-skill-description',
  standalone: true,
  imports: [StandardButtonComponent],
  templateUrl: './skill-description.component.html',
  styleUrl: './skill-description.component.scss',
})
export class SkillDescriptionComponent {}
