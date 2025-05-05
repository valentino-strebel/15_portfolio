import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  scrollTo(section: string) {
    let element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  scrollToTop() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
}
