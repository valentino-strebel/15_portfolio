import { Component } from '@angular/core';
import { CompanyLogoComponent } from '../company-logo/company-logo.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CompanyLogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  scrollTo(section: string) {
    let element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
