import { Routes } from '@angular/router';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'privacy-policy', component: PrivacyComponent },
];
