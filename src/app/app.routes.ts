import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PrivacyComponent } from './components/privacy/privacy.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'privacy-policy', component: PrivacyComponent },
];
