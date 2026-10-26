import { LanguageType, RoleType } from '../core/models/portfolio.model';

/** Libellés et textes de la section Contact, entièrement bilingues. */
export interface ContactSectionText {
  badge: string;
  infoTitle: string;
  emailLabel: string;
  phoneLabel: string;
  locationLabel: string;
  location: string;
  socialTitle: string;
  socialGithubLabel: string;
  socialLinkedinLabel: string;
  socialEmailLabel: string;
  formTitle: string;
  nameLabel: string;
  companyLabel: string;
  subjectLabel: string;
  messageLabel: string;
  submitLabel: string;
  successMessage: string;
}

export const CONTACT_INFO = {
  email: 'miguelsouop@gmail.com',
  phone: '+237 676 00 77 85 / +237 697 91 27 43',
  github: 'https://github.com/miguelsouop-dev',
  linkedin: 'https://www.linkedin.com/in/miguel-souop-7554a139b/',
} as const;

export const CONTACT_SECTION_TEXT: Record<LanguageType, ContactSectionText> = {
  fr: {
    badge: 'CONTACT',
    infoTitle: 'Informations de contact',
    emailLabel: 'Email',
    phoneLabel: 'Téléphone',
    locationLabel: 'Localisation',
    location: 'Douala - Cameroun',
    socialTitle: 'Réseaux Sociaux',
    socialGithubLabel: 'Profil GitHub de Miguel Souop',
    socialLinkedinLabel: 'Profil LinkedIn de Miguel Souop',
    socialEmailLabel: 'Envoyer un email à Miguel Souop',
    formTitle: 'Envoyez-moi un message',
    nameLabel: 'Nom',
    companyLabel: 'Entreprise',
    subjectLabel: 'Sujet',
    messageLabel: 'Message',
    submitLabel: 'Envoyer le message',
    successMessage: 'Votre message a été envoyé avec succès !',
  },
  en: {
    badge: 'CONTACT',
    infoTitle: 'Contact information',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    locationLabel: 'Location',
    location: 'Douala - Cameroon',
    socialTitle: 'Social Media',
    socialGithubLabel: 'Miguel Souop GitHub profile',
    socialLinkedinLabel: 'Miguel Souop LinkedIn profile',
    socialEmailLabel: 'Email Miguel Souop',
    formTitle: 'Send me a message',
    nameLabel: 'Name',
    companyLabel: 'Company',
    subjectLabel: 'Subject',
    messageLabel: 'Message',
    submitLabel: 'Send message',
    successMessage: 'Your message was sent successfully!',
  },
};

/** Accroche sous le titre, selon la casquette active puis la langue. */
export const CONTACT_SUBTITLE: Record<LanguageType, Record<RoleType, string>> = {
  fr: {
    'Développeur Fullstack':
      "Un projet en tête ? Une application à développer ? N'hésitez pas à me contacter.",
    'Ethical Hacker':
      "Un projet en tête ? Une application à auditer ? N'hésitez pas à me contacter.",
    'UI/UX Designer':
      "Un projet en tête ? Une interface à concevoir ? N'hésitez pas à me contacter.",
  },
  en: {
    'Développeur Fullstack': 'Got a project in mind? An application to build? Feel free to contact me.',
    'Ethical Hacker': 'Got a project in mind? An application to audit? Feel free to contact me.',
    'UI/UX Designer': 'Got a project in mind? An interface to design? Feel free to contact me.',
  },
};
