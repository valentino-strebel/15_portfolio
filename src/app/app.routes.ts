import { Routes } from '@angular/router';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { HomeComponent } from './components/home/home.component';
import { ImpressComponent } from './components/impress/impress.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'privacy-policy', component: PrivacyComponent },
  { path: 'impress', component: ImpressComponent },
];
