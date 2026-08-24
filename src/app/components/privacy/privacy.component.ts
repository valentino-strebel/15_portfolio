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

      general: { de: 'Allgemeine Hinweise', en: 'General Information' },

      generalDesc: {
        de: 'Der Schutz Ihrer personenbezogenen Daten ist uns ein besonderes Anliegen. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den geltenden Datenschutzvorschriften sowie dieser Datenschutzerklärung. Beim Aufruf dieser Website werden technisch erforderliche Daten verarbeitet, die für die Bereitstellung und Sicherheit der Website notwendig sind. Personenbezogene Daten, die Sie uns über das Kontaktformular übermitteln, verarbeiten wir ausschließlich zur Bearbeitung Ihrer Anfrage und gegebenenfalls zur Anbahnung oder Durchführung eines Vertragsverhältnisses.',
        en: 'The protection of your personal data is very important to us. We treat your personal data confidentially and in accordance with applicable data protection laws and this privacy policy. When you access this website, technically necessary data is processed in order to provide and secure the website. Personal data that you send to us via the contact form is processed solely for the purpose of handling your inquiry and, where applicable, for taking steps prior to entering into or performing a contract.',
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
        de: 'Wenn Sie uns über das Kontaktformular eine Anfrage senden, verarbeiten wir die von Ihnen eingegebenen Daten (Name, E-Mail-Adresse und Nachricht), um Ihre Anfrage zu bearbeiten und gegebenenfalls Rückfragen zu beantworten. Die übermittelten Angaben werden an unser bei STRATO geführtes E-Mail-Postfach übermittelt und dort verarbeitet.',
        en: 'If you send us an inquiry via the contact form, we process the data you enter (name, email address, and message) in order to handle your inquiry and, where necessary, respond to follow-up questions. The information you submit is sent to and processed in our email account hosted by STRATO.',
      },

      hosting: {
        de: 'Diese Website und unser E-Mail-Verkehr werden bei der STRATO GmbH, Otto-Ostrowski-Straße 7, 10249 Berlin, Deutschland, gehostet. Beim Aufruf der Website werden technisch erforderliche Server-Logdaten, insbesondere die IP-Adresse sowie Angaben zu Datum und Uhrzeit des Zugriffs, verarbeitet. STRATO gibt an, vollständige IP-Adressen zur Erkennung und Abwehr von Angriffen höchstens sieben Tage zu speichern. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO aufgrund unseres berechtigten Interesses an einem sicheren und zuverlässigen Betrieb der Website. Mit STRATO besteht ein Vertrag zur Auftragsverarbeitung gemäß Art. 28 DSGVO.',
        en: 'This website and our email communications are hosted by STRATO GmbH, Otto-Ostrowski-Straße 7, 10249 Berlin, Germany. When the website is accessed, technically necessary server log data is processed, in particular the IP address as well as the date and time of access. STRATO states that complete IP addresses are stored for no more than seven days for the purpose of detecting and preventing attacks. The processing is based on Article 6(1)(f) GDPR and our legitimate interest in the secure and reliable operation of the website. We have concluded a data processing agreement with STRATO in accordance with Article 28 GDPR.',
      },

      contact2: {
        de: 'Die Verarbeitung Ihrer Anfrage erfolgt, soweit sie der Anbahnung oder Durchführung eines Vertrags dient, auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO. Bei sonstigen Anfragen erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse besteht in der sachgerechten Bearbeitung und Beantwortung der an uns gerichteten Anfragen.',
        en: 'Where your inquiry relates to steps prior to entering into or performing a contract, the processing is based on Article 6(1)(b) GDPR. Other inquiries are processed on the basis of Article 6(1)(f) GDPR. Our legitimate interest is the proper handling and response to inquiries addressed to us.',
      },

      contact3: {
        de: 'Kommt aufgrund Ihrer Anfrage ein Auftrag zustande, werden die für die Vertragsabwicklung, Rechnungsstellung und Buchhaltung erforderlichen personenbezogenen Daten zusätzlich in der Buchhaltungssoftware sevDesk verarbeitet. Anbieter ist die sevDesk GmbH, Im Unteren Angel 1, 77652 Offenburg, Deutschland. Die Verarbeitung erfolgt insoweit auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO sowie, soweit gesetzliche Buchführungs- und Aufbewahrungspflichten bestehen, auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Mit sevDesk besteht ein Vertrag zur Auftragsverarbeitung gemäß Art. 28 DSGVO.',
        en: 'If your inquiry results in an order, the personal data required for contract performance, invoicing, and accounting is also processed using the sevDesk accounting software. The provider is sevDesk GmbH, Im Unteren Angel 1, 77652 Offenburg, Germany. This processing is based on Article 6(1)(b) GDPR and, where statutory accounting and retention obligations apply, on Article 6(1)(c) GDPR. We have concluded a data processing agreement with sevDesk in accordance with Article 28 GDPR.',
      },

      store: { de: 'Speicherdauer', en: 'Storage Period' },

      store1: {
        de: 'Anfragen, aus denen kein Auftrag entsteht, werden nach abschließender Bearbeitung gelöscht, sobald die weitere Speicherung für die Bearbeitung der Anfrage nicht mehr erforderlich ist und keine gesetzlichen Gründe für eine weitere Aufbewahrung bestehen. Kommt ein Auftrag zustande, werden die für Vertragsabwicklung, Rechnungsstellung und Buchhaltung erforderlichen Daten entsprechend den gesetzlichen handels- und steuerrechtlichen Aufbewahrungspflichten gespeichert. Je nach Art der Unterlage können diese Aufbewahrungsfristen insbesondere sechs, acht oder zehn Jahre betragen. Nach Ablauf der jeweils geltenden Aufbewahrungsfrist werden die Daten gelöscht, sofern keine weitere gesetzliche Grundlage für die Speicherung besteht.',
        en: 'Inquiries that do not result in an order are deleted after they have been fully processed, as soon as further storage is no longer necessary for handling the inquiry and there is no legal reason to retain the data. If an order is placed, the data required for contract performance, invoicing, and accounting is retained in accordance with applicable statutory commercial and tax retention obligations. Depending on the type of document, these retention periods may in particular be six, eight, or ten years. After the applicable retention period has expired, the data is deleted unless there is another legal basis requiring further storage.',
      },

      rights: { de: 'Ihre Rechte', en: 'Your Rights' },

      rights1: {
        de: 'Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen insbesondere das Recht auf:',
        en: 'Under applicable law, you have in particular the right to:',
      },

      rightsList1: {
        de: 'Auskunft über Ihre gespeicherten personenbezogenen Daten,',
        en: 'Access to your stored personal data,',
      },

      rightsList2: { de: 'Berichtigung,', en: 'Rectification,' },

      rightsList3: { de: 'Löschung,', en: 'Erasure,' },

      rightsList4: {
        de: 'Einschränkung der Verarbeitung,',
        en: 'Restriction of processing,',
      },

      rightsList5: { de: 'Datenübertragbarkeit,', en: 'Data portability,' },

      rightsList6: {
        de: 'sowie Widerspruch gegen die Verarbeitung, soweit die gesetzlichen Voraussetzungen hierfür vorliegen.',
        en: 'And objection to processing where the statutory requirements are met.',
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
        de: 'Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, insbesondere von Anfragen über das Kontaktformular, eine SSL- bzw. TLS-Verschlüsselung. Wir treffen angemessene technische und organisatorische Maßnahmen, um personenbezogene Daten vor Verlust, Missbrauch und unbefugtem Zugriff zu schützen.',
        en: 'For security reasons and to protect the transmission of confidential content, in particular inquiries submitted via the contact form, this website uses SSL or TLS encryption. We take appropriate technical and organizational measures to protect personal data against loss, misuse, and unauthorized access.',
      },

      forward: {
        title: {
          de: 'Datenübermittlung in Drittstaaten',
          en: 'Data Transfers to Third Countries',
        },
        desc: {
          de: 'Für den unmittelbaren Betrieb dieser Website und die Bearbeitung von Kontaktanfragen setzen wir keine Dienste ein, deren Zweck eine Übermittlung personenbezogener Daten in Staaten außerhalb der Europäischen Union oder des Europäischen Wirtschaftsraums ist. Soweit von unseren Auftragsverarbeitern, insbesondere STRATO oder sevDesk, Unterauftragnehmer eingesetzt werden und dabei eine Verarbeitung in einem Drittstaat erfolgt, erfolgt eine solche Übermittlung nur unter Beachtung der Voraussetzungen der Art. 44 ff. DSGVO und der jeweils erforderlichen geeigneten Garantien.',
          en: 'For the direct operation of this website and the handling of contact inquiries, we do not use services whose purpose is to transfer personal data to countries outside the European Union or the European Economic Area. If our processors, in particular STRATO or sevDesk, use subprocessors and processing takes place in a third country, any such transfer is carried out only in accordance with the requirements of Articles 44 et seq. GDPR and the applicable appropriate safeguards.',
        },
      },

      complaint: {
        title: {
          de: 'Beschwerderecht bei einer Aufsichtsbehörde',
          en: 'Right to Lodge a Complaint with a Supervisory Authority',
        },
        desc: {
          de: 'Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen geltendes Datenschutzrecht verstößt, haben Sie gemäß Art. 77 DSGVO das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren. Für private Unternehmen mit Sitz in Bayern ist grundsätzlich das Bayerische Landesamt für Datenschutzaufsicht (BayLDA), Promenade 18, 91522 Ansbach, Deutschland, zuständig.',
          en: 'If you believe that the processing of your personal data violates applicable data protection law, you have the right under Article 77 GDPR to lodge a complaint with a data protection supervisory authority. For private companies based in Bavaria, the competent authority is generally the Bavarian State Office for Data Protection Supervision (BayLDA), Promenade 18, 91522 Ansbach, Germany.',
        },
      },

      cookies: {
        title: {
          de: 'Keine Tracking- oder Analyse-Cookies',
          en: 'No Tracking or Analytics Cookies',
        },
        desc: {
          de: 'Wir setzen auf dieser Website keine Cookies zu Analyse-, Tracking- oder Marketingzwecken ein und verwenden keine Tracking- oder Analyse-Tools. Es werden keine externen Inhalte von Drittanbietern wie YouTube, Google Maps oder Social-Media-Plugins eingebunden. Verwendete Schriftarten werden lokal bereitgestellt. Soweit der Hostinganbieter technisch notwendige Session-Cookies einsetzen sollte, dienen diese ausschließlich der technischen Bereitstellung der Website und nicht der Analyse oder dem Tracking von Besuchern.',
          en: 'We do not use cookies for analytics, tracking, or marketing purposes on this website and do not use any tracking or analytics tools. No external third-party content such as YouTube, Google Maps, or social media plugins is embedded. Any fonts used are hosted locally. If the hosting provider uses technically necessary session cookies, they are used solely for the technical provision of the website and not for analytics or visitor tracking.',
        },
      },

      changes: {
        title: {
          de: 'Änderung dieser Datenschutzerklärung',
          en: 'Changes to This Privacy Policy',
        },
        desc: {
          de: 'Wir behalten uns vor, diese Datenschutzerklärung anzupassen, wenn sich die Rechtslage, die Website oder die von uns eingesetzten Dienste ändern. Es gilt jeweils die zum Zeitpunkt des Besuchs veröffentlichte Fassung. Stand: August 2026.',
          en: 'We reserve the right to amend this privacy policy if the legal requirements, the website, or the services we use change. The version published at the time of your visit applies. Last updated: August 2026.',
        },
      },
    },
  ];
}
