import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SkillsComponent } from './components/skills/skills.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactformComponent } from './components/contactform/contactform.component';
import { ReferenceComponent } from './components/reference/reference.component';
import { AboutComponent } from './components/about/about.component';
import { IntroductionComponent } from './components/introduction/introduction.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    SkillsComponent,
    PortfolioComponent,
    ContactformComponent,
    ReferenceComponent,
    AboutComponent,
    IntroductionComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio_valentino_strebel';
}
