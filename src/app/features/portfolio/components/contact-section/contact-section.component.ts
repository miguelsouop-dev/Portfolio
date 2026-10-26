import { Component, computed, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RoleService } from '../../../../core/services/role.service';
import { LanguageService } from '../../../../core/services/language.service';
import {
  CONTACT_INFO,
  CONTACT_SECTION_TEXT,
  CONTACT_SUBTITLE,
} from '../../../../data/contact.data';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.css',
})
export class ContactSectionComponent {
  private readonly roleService = inject(RoleService);
  private readonly langService = inject(LanguageService);

  /** Coordonnées statiques (email, téléphone, réseaux). */
  readonly info = CONTACT_INFO;

  /** Libellés bilingues de la section. */
  readonly text = computed(() => CONTACT_SECTION_TEXT[this.langService.currentLang()]);

  /** Accroche dynamique selon la casquette active puis la langue. */
  readonly subtitle = computed(
    () => CONTACT_SUBTITLE[this.langService.currentLang()][this.roleService.activeRole()],
  );

  // Modèle du formulaire de contact
  formData = {
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  };

  onSubmit(): void {
    console.log('Formulaire soumis :', this.formData);
    alert(this.text().successMessage);
    this.formData = { name: '', email: '', company: '', subject: '', message: '' };
  }
}
