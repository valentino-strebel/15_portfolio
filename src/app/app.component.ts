import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], // ✅ plural
})
export class AppComponent implements AfterViewInit {
  title = 'Strebel Company';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    // Only run in the browser (avoids "document is not defined" on the server)
    if (!isPlatformBrowser(this.platformId)) return;

    // Dynamically import so the AOS bundle isn't even loaded during SSR
    import('aos').then((AOS) => {
      AOS.init({
        once: false,
        mirror: false,
        duration: 600,
        easing: 'ease-out',
      });

      // Defer a tick so the DOM is fully painted before refreshing
      setTimeout(() => AOS.refresh(), 100);
    });
  }
}
