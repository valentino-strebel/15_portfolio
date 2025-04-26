import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-standard-button',
  standalone: true,
  imports: [],
  templateUrl: './standard-button.component.html',
  styleUrl: './standard-button.component.scss',
})
export class StandardButtonComponent {
  @Input() buttonText: string = 'Default Text';
}
