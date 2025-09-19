import { Component, AfterViewInit, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { SubmitButtonComponent } from '../../shared/submit-button/submit-button.component';
import { HttpClient } from '@angular/common/http';
import { LanguageService } from '../../shared/language.service';
import { ScrollService } from '../../shared/scroll.service';
import { DisplayService } from '../../shared/display.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import AOS from 'aos';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [
    FormsModule,
    SubmitButtonComponent,
    RouterLink,
    RouterLinkActive,
    CommonModule,
  ],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss',
})
export class ContactformComponent implements AfterViewInit {
  constructor(
    public languageService: LanguageService,
    public scrollService: ScrollService,
    public displayService: DisplayService
  ) {}

  http = inject(HttpClient);

  ngAfterViewInit() {
    AOS.refresh();
  }

  contact = [
    {
      sec: {
        de: 'Kontakt',
        en: 'Contact',
      },
      header: {
        de: 'Ihr nächstes Projekt beginnt hier.',
        en: 'Your next project starts here.',
      },
      subhead: {
        de: 'Wir freuen uns darauf, an sinnvollen Projekten mitzuwirken und echten Mehrwert in jedes Team einzubringen, mit dem wir zusammenarbeiten. Wenn Sie ein engagiertes Entwicklerteam suchen, das von Leidenschaft und Innovationskraft angetrieben wird – lassen Sie uns in Kontakt treten!',
        en: "We’re excited to collaborate on meaningful projects and bring real value to every team we partner with. If you're looking for a dedicated development team driven by impact and innovation — let’s connect!",
      },
      desc1: {
        de: 'Suchen Sie einen zuverlässigen Partner?',
        en: 'Looking for a reliable partner?',
      },
      desc2: { de: 'Kontaktieren Sie uns!', en: 'Contact us!' },
      name: { de: 'Ihr Name', en: 'Your name' },
      email: { de: 'Ihre Email', en: 'Your email' },
      msg: { de: 'Ihre Nachricht', en: 'Your message' },
      priv1: {
        de: 'Ich habe die ',
        en: 'I have read the ',
      },
      priv2: {
        de: ' gelesen und stimme der Verarbeitung meiner Daten wie darin beschrieben zu.',
        en: ' and agree to the processing of my data as outlined',
      },
      send: { de: 'Nachricht senden!', en: 'Send message!' },
      link: { de: ' Datenschutzrichtlinie ', en: ' privacy policy ' },
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
      privacyError: {
        de: 'Bitte akzeptieren Sie unsere Datenschutzerklärung',
        en: 'Please accept our privacy policy',
      },
    },
  ];

  isConfirmed = false;

  toggleConfirm() {
    this.isConfirmed = true;
    setTimeout(() => {
      this.isConfirmed = false;
    }, 3000);
  }

  confirm = [
    {
      ok: {
        de: 'Vielen Dank! Wir haben Ihre Nachricht erhalten!',
        en: 'Thank you! We have received your message!',
      },
    },
  ];

  contactData = {
    name: '',
    email: '',
    message: '',
    privacyAccepted: false,
  };

  mailTest = false;

  post = {
    endPoint: 'https://www.strebel-company.de/sendMail.php',
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
              privacyAccepted: false,
            };
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
      this.toggleConfirm();
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
    } else {
      Object.values(ngForm.controls).forEach((control) => {
        control.markAsTouched();
      });
    }
  }
}
