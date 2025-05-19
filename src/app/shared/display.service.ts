import { Injectable } from '@angular/core';
type Change = 'home' | 'privacy' | 'impress';

@Injectable({
  providedIn: 'root',
})
export class DisplayService {
  currentPage = 'home';

  pageChange(change: Change) {
    this.currentPage = change;
  }
}
