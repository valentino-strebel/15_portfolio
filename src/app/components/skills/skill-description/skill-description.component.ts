import { Component } from '@angular/core';
import { StandardButtonComponent } from '../../../shared/standard-button/standard-button.component';
import { ScrollService } from '../../../shared/scroll.service';

@Component({
  selector: 'app-skill-description',
  standalone: true,
  imports: [StandardButtonComponent],
  templateUrl: './skill-description.component.html',
  styleUrl: './skill-description.component.scss',
})
export class SkillDescriptionComponent {
  constructor(public scrollService: ScrollService) {}
}
