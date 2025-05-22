import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  title = 'Strebel Company';
  ngAfterViewInit() {
    AOS.init({
      once: false,
      mirror: false,
      duration: 600,
      easing: 'ease-out',
    });

    setTimeout(() => AOS.refresh(), 100);
  }
}
