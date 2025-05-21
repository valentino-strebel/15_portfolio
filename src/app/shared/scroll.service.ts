import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private pendingSection: string | null = null;

  constructor(private router: Router) {}

  scrollTo(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      this.pendingSection = section;
      this.router.navigate(['home']);
    }
  }

  handleScrollAfterNavigation() {
    if (this.pendingSection) {
      const section = this.pendingSection;
      this.pendingSection = null;

      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }

  scrollToTop() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
}
