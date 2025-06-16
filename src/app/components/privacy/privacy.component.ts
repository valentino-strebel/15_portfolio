import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../shared/language.service';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [],
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss'],
})
export class PrivacyComponent implements OnInit {
  ngOnInit() {
    window.scrollTo({ top: 0 });
  }
  constructor(public languageService: LanguageService) {}

  privacy = [
    {
      section: { de: 'Datenschutzerklärung', en: 'Privacy Policy' },

      general: { de: 'Allgemeine Hinweise', en: 'Disclaimer' },

      generalDesc: {
        de: 'Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung. Die Nutzung dieser Website ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unserer Seite personenbezogene Daten (z.B. Name, E-Mail-Adresse) erhoben werden, erfolgt dies stets auf freiwilliger Basis.',
        en: 'The protection of your personal data is very important to us. We treat your personal information confidentially and in accordance with the applicable data protection laws and this privacy policy. The use of this website is generally possible without providing personal data. If personal data (such as name or email address) is collected on our site, this is always done on a voluntary basis.',
      },

      resp: { de: 'Verantwortlicher', en: 'Controller' },

      resp1: {
        de: 'Verantwortlich für die Datenverarbeitung auf dieser Website ist:',
        en: 'The controller responsible for data processing on this website is:',
      },

      controllerData: {
        owner: { de: 'Inhaber:', en: 'Sole Proprietor:' },
        country: { de: 'Deutschland', en: 'Germany' },
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

      hosting: {
        de: 'Diese Website wird bei der STRATO AG gehostet. Die dabei erhobenen Server-Logfiles (z. B. IP-Adresse, Datum, Uhrzeit, aufgerufene Seite) werden automatisch gespeichert und dienen der technischen Sicherheit. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Es besteht ein Auftragsverarbeitungsvertrag mit dem Hosting-Anbieter gemäß Art. 28 DSGVO.',
        en: 'This website is hosted by STRATO AG. Server log files (e.g., IP address, date, time, accessed page) are automatically collected and stored for technical security purposes. The processing is based on Article 6(1)(f) of the GDPR. A data processing agreement has been concluded with the hosting provider in accordance with Article 28 of the GDPR. ',
      },

      contact2: {
        de: 'Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.',
        en: 'This data will not be shared without your consent.',
      },

      contact3: {
        de: 'Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt somit ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt. Sofern die Verarbeitung personenbezogener Daten nicht auf einer Einwilligung beruht, erfolgt sie auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) oder Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer funktionsfähigen Website).',
        en: 'The processing of the data entered in the contact form is therefore based exclusively on your consent (Art. 6(1)(a) GDPR). You can revoke this consent at any time. An informal email making this request is sufficient. The legality of the data processing operations carried out until the revocation remains unaffected by the revocation. If the processing of personal data is not based on consent, it is carried out on the basis of Article 6(1)(b) GDPR (performance of a contract) or Article 6(1)(f) GDPR (legitimate interest in the proper functioning of the website).',
      },
      store: { de: 'Speicherdauer', en: 'Storage Period' },
      store1: {
        de: 'Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Gesetzliche Aufbewahrungsfristen bleiben unberührt.Darüber hinaus unterliegen wir bestimmten handels- und steuerrechtlichen Aufbewahrungspflichten, die sich beispielsweise aus der Abgabenordnung (AO) und dem Handelsgesetzbuch (HGB) ergeben. Diese Fristen betragen in der Regel sechs bis zehn Jahre. Während dieses Zeitraums werden die Daten ausschließlich zur Erfüllung der gesetzlichen Aufbewahrungspflichten gespeichert und nach deren Ablauf routinemäßig gelöscht.',
        en: 'The data you provide in the contact form will be retained by us until you request its deletion, revoke your consent for storage, or the purpose for data storage no longer applies (e.g., after your request has been fully processed). Mandatory statutory retention periods remain unaffected. In addition, we are subject to certain statutory retention obligations under commercial and tax law, such as those arising from the German Fiscal Code (AO) and the Commercial Code (HGB). These retention periods are generally six to ten years. During this time, the data will be stored exclusively for the purpose of complying with legal retention obligations and will be routinely deleted once these periods expire.',
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
        de: 'Zur Ausübung Ihrer Rechte genügt eine formlose Mitteilung an:',
        en: 'To exercise your rights, a simple informal message is sufficient to:',
      },
      encrypt: {
        de: 'SSL- bzw. TLS-Verschlüsselung',
        en: 'SSL or TLS Encryption',
      },
      encrypt1: {
        de: 'Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Anfragen über das Kontaktformular, eine SSL- bzw. TLS-Verschlüsselung. Wir treffen geeignete technische und organisatorische Sicherheitsmaßnahmen, um Ihre Daten vor Verlust, Missbrauch oder unbefugtem Zugriff zu schützen.',
        en: 'For security reasons and to protect the transmission of confidential content, such as inquiries via the contact form, this site uses SSL or TLS encryption. We take appropriate technical and organizational security measures to protect your data against loss, misuse, or unauthorized access.',
      },
      forward: {
        title: {
          de: 'Datenübermittlung in Drittstaaten',
          en: 'Data Transfers to Third Countries',
        },
        desc: {
          de: 'Eine Übermittlung personenbezogener Daten in Staaten außerhalb der EU bzw. des EWR findet nicht statt.',
          en: 'No personal data is transferred to countries outside the EU or the EEA.',
        },
      },
      complaint: {
        title: {
          de: 'Beschwerderecht bei einer Aufsichtsbehörde',
          en: ' Right to Lodge a Complaint with a Supervisory Authority',
        },
        desc: {
          de: 'Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen geltendes Datenschutzrecht verstößt, haben Sie das Recht auf Beschwerde bei einer Datenschutzaufsichtsbehörde (Art. 77 DSGVO).',
          en: 'If you believe that the processing of your personal data violates applicable data protection laws, you have the right to lodge a complaint with a data protection supervisory authority (Article 77 GDPR).',
        },
      },

      cookies: {
        title: {
          de: 'Keine Cookies, kein Tracking',
          en: 'No Cookies, No Tracking',
        },
        desc: {
          de: 'Auf dieser Website werden keine Cookies gesetzt und keine Tracking- oder Analyse-Tools verwendet. Auf dieser Website werden keine externen Inhalte von Drittanbietern eingebunden (z. B. YouTube, Google Maps, Social Media Plugins).',
          en: 'This website does not use cookies and does not employ any tracking or analytics tools.No external content from third-party providers is embedded on this website (e.g., YouTube, Google Maps, social media plugins).',
        },
      },
      changes: {
        title: {
          de: 'Änderung dieser Datenschutzerklärung',
          en: 'Changes to This Privacy Policy',
        },
        desc: {
          de: 'Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht. Es gilt jeweils die zum Zeitpunkt des Besuchs gültige Fassung.',
          en: 'We reserve the right to amend this privacy policy to ensure it always complies with current legal requirements. The version in effect at the time of your visit shall apply.',
        },
      },
    },
  ];
}
