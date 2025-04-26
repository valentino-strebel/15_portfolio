import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-port-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './port-image.component.html',
  styleUrl: './port-image.component.scss',
})
export class PortImageComponent {
  @Input() imageUrl: string = '';
}
