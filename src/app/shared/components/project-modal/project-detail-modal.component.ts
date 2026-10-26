import { Component, computed, inject, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../core/services/language.service';
import { Project } from '../../../core/models/project.model';
import { PROJECT_CATEGORY_LABELS } from '../../../data/projects.data';
import { ROLE_LABELS } from '../../../data/header.data';

const MODAL_TEXT: Record<
  'fr' | 'en',
  { features: string; role: string; tech: string; demo: string; github: string; details: string }
> = {
  fr: {
    features: 'Fonctionnalités clés',
    role: 'Rôle',
    tech: 'Technologies',
    demo: 'Démo Live',
    github: 'GitHub',
    details: 'Détails',
  },
  en: {
    features: 'Key features',
    role: 'Role',
    tech: 'Technologies',
    demo: 'Live Demo',
    github: 'GitHub',
    details: 'Details',
  },
};

@Component({
  selector: 'app-project-detail-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-detail-modal.component.html',
  styleUrl: './project-detail-modal.component.css',
})
export class ProjectDetailModalComponent {
  project = input.required<Project>();
  closed = output<void>();

  langService = inject(LanguageService);

  readonly text = computed(() => MODAL_TEXT[this.langService.currentLang()]);

  /** Fonctionnalités traduites selon la langue courante. */
  readonly localizedFeatures = computed<string[] | undefined>(
    () => this.project().features?.[this.langService.currentLang()],
  );

  /** Catégorie traduite (ex : « Réseau » → « Network »). */
  readonly categoryLabel = computed(() =>
    PROJECT_CATEGORY_LABELS[this.langService.currentLang()][this.project().category],
  );

  /** Casquette traduite (ex : « Développeur Fullstack » → « Fullstack Developer »). */
  readonly roleLabel = computed(() =>
    ROLE_LABELS[this.langService.currentLang()][this.project().roleType],
  );

  readonly gallery = computed<string[]>(() => {
    const project = this.project();
    return project.gallery?.length ? project.gallery : [project.image];
  });

  readonly demoLink = computed<string | undefined>(() => this.project().demoUrl);
  readonly secondaryLink = computed<string | undefined>(() => this.project().githubUrl);

  close(): void {
    this.closed.emit();
  }

  onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.close();
    }
  }
}
