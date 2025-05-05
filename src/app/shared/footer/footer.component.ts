import { Component } from '@angular/core';
import { CompanyLogoComponent } from '../company-logo/company-logo.component';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CompanyLogoComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  constructor(public scrollService: ScrollService) {}
}
