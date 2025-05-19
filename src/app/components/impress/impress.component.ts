import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../shared/language.service';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [],
  templateUrl: './impress.component.html',
  styleUrls: ['./impress.component.scss'],
})
export class PrivacyComponent implements OnInit {
  ngOnInit() {
    window.scrollTo({ top: 0 });
  }
  constructor(public languageService: LanguageService) {}
}
