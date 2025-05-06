import { Component } from '@angular/core';
import { SkillsComponent } from '../skills/skills.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ContactformComponent } from '../contactform/contactform.component';
import { ReferenceComponent } from '../reference/reference.component';
import { AboutComponent } from '../about/about.component';
import { IntroductionComponent } from '../introduction/introduction.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SkillsComponent,
    PortfolioComponent,
    ContactformComponent,
    ReferenceComponent,
    AboutComponent,
    IntroductionComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
