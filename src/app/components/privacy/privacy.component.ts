import { Component } from '@angular/core';
import { LanguageService } from '../../shared/language.service';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [],
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss'],
})
export class PrivacyComponent {
  constructor(public languageService: LanguageService) {}

  privacy = [
    {
      section: { de: 'Datenschutzerklärung', en: 'Privacy Policy' },

      resp: { de: 'Verantwortlicher', en: 'Controller' },

      resp1: {
        de: 'Verantwortlich für die Datenverarbeitung auf dieser Website ist:',
        en: 'The controller responsible for data processing on this website is:',
      },

      respEmail: 'office@strebel-company.de',

      use: {
        de: 'Erhebung und Speicherung personenbezogener Daten sowie Art und Zweck von deren Verwendung',
        en: 'Collection and Storage of Personal Data and the Nature and Purpose of Their Use',
      },

      contact: { de: 'Kontaktformular', en: 'Contact Form' },

      contact1: {
        de: 'Wenn Sie uns per Formular Anfragen zukommen lassen, werden Ihre Angaben aus dem Formular inklusive der von Ihnen dort angegebenen Kontaktdaten (Name, E-Mail, Telefonnummer sowie Ihre Nachricht) zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.',
        en: 'If you send us inquiries via the contact form, the information you provide in the form, including the contact details you enter (name, email, phone number, and your message), will be stored by us for the purpose of processing your inquiry and in case of follow-up questions',
      },

      contact2: {
        de: 'Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.',
        en: 'This data will not be shared without your consent.',
      },

      contact3: {
        de: 'Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt somit ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.',
        en: 'The processing of the data entered in the contact form is therefore based exclusively on your consent (Art. 6(1)(a) GDPR). You can revoke this consent at any time. An informal email making this request is sufficient. The legality of the data processing operations carried out until the revocation remains unaffected by the revocation.',
      },
      store: { de: 'Speicherdauer', en: 'Storage Period' },
      store1: {
        de: 'Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Gesetzliche Aufbewahrungsfristen bleiben unberührt.',
        en: 'The data you provide in the contact form will be retained by us until you request its deletion, revoke your consent for storage, or the purpose for data storage no longer applies (e.g., after your request has been fully processed). Mandatory statutory retention periods remain unaffected.',
      },
      rights: { de: 'Ihre Rechte', en: 'Your Rights' },
      rights1: {
        de: 'Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf:',
        en: 'Under applicable law, you have the right to:',
      },
      rightsList1: {
        de: 'Auskunft über Ihre gespeicherten personenbezogenen Daten,',
        en: 'Access your stored personal data,',
      },
      rightsList2: { de: 'Berichtigung,', en: 'Rectification,' },
      rightsList3: { de: 'Löschung,', en: 'Erasure,' },
      rightsList4: {
        de: 'Einschränkung der Verarbeitung,',
        en: 'Restriction of processing,',
      },
      rightsList5: { de: 'Datenübertragbarkeit,', en: 'Data portability,' },
      rightsList6: {
        de: 'sowie Widerspruch gegen die Verarbeitung.',
        en: 'And objection to processing.<',
      },

      rights2: {
        de: 'Zudem steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.',
        en: 'You also have the right to lodge a complaint with the competent supervisory authority.',
      },
      encrypt: {
        de: 'SSL- bzw. TLS-Verschlüsselung',
        en: 'SSL or TLS Encryption',
      },
      encrypt1: {
        de: 'Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Anfragen über das Kontaktformular, eine SSL- bzw. TLS-Verschlüsselung.',
        en: 'For security reasons and to protect the transmission of confidential content, such as inquiries via the contact form, this site uses SSL or TLS encryption.',
      },
    },
  ];
}
