import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-port-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './port-text.component.html',
  styleUrl: './port-text.component.scss',
})
export class PortTextComponent {
  @Input() projectName: string = 'ProjectName';
  @Input() projectTech: string = 'Project Technology';
  @Input() projectDesc: string = 'Project Description';
  @Input() imageUrl: string = '';
}
