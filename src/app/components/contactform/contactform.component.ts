import { Component, NgModule, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { SubmitButtonComponent } from '../../shared/submit-button/submit-button.component';
import { HttpClient } from '@angular/common/http';
import { LanguageService } from '../../shared/language.service';
import { ScrollService } from '../../shared/scroll.service';
import { DisplayService } from '../../shared/display.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [FormsModule, SubmitButtonComponent, RouterLink, RouterLinkActive],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss',
})
export class ContactformComponent {
  constructor(
    public languageService: LanguageService,
    public scrollService: ScrollService,
    public displayService: DisplayService
  ) {}
  http = inject(HttpClient);

  contact = [
    {
      sec: {
        de: 'Kontakt',
        en: 'Contact',
      },
      header: {
        de: 'Sie möchten ein Problem gelöst haben?',
        en: 'Got a problem to solve?',
      },
      subhead: {
        de: 'Ich freue mich darauf, an bedeutungsvollen Projekten mitzuwirken und meinen Beitrag zu leisten.Wenn Sie auf der Suche nach einem engagierten Entwickler sind, der Ihrem Team einen Mehrwert bietet, lassen Sie uns gerne in Kontakt treten!',
        en: "I am excited to collaborate and contribute to meaningful projects. If you are looking for a dedicated developer ready to add value to your team, let's connect!",
      },
      desc1: { de: 'Sie benötigen einen Entwickler?', en: 'Need a developer?' },
      desc2: { de: 'Kontaktieren Sie mich!', en: 'Contact me!' },
      name: { de: 'Ihr Name', en: 'Your name' },
      email: { de: 'Ihre Email', en: 'Your email' },
      msg: { de: 'Ihre Nachricht', en: 'Your message' },
      priv1: {
        de: 'Ich habe die',
        en: 'I have read the',
      },
      priv2: {
        de: 'gelesen und stimme der Verarbeitung meiner Daten wie darin beschrieben zu.',
        en: 'and agree to the processing of my data as outlined',
      },
      send: { de: 'Nachricht senden!', en: 'Send message!' },
      link: { de: 'Datenschutzrichtlinie', en: 'privacy policy' },
    },
  ];

  error = [
    {
      nameError: {
        de: 'Ihr Name ist erforderlich',
        en: 'Your name is required',
      },
      emailError: {
        de: 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
        en: 'Please enter a valid email',
      },
      commentError: {
        de: 'Bitte geben Sie eine Nachricht ein',
        en: 'Please enter a message',
      },
    },
  ];

  contactData = {
    name: '',
    email: '',
    message: '',
  };

  mailTest = true;

  post = {
    endPoint: 'https://strebel-company.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.contactData = {
              name: '',
              email: '',
              message: '',
            };
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
    }
  }
}
