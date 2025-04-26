import { Component } from '@angular/core';
import { PortImageComponent } from './port-image/port-image.component';
import { PortTextComponent } from './port-text/port-text.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [PortImageComponent, PortTextComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {}
