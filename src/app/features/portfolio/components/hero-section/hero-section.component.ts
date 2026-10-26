import {
  Component,
  computed,
  inject,
  ElementRef,
  ViewChild,
  effect,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleService } from '../../../../core/services/role.service';
import { LanguageService } from '../../../../core/services/language.service';
import { HERO_BY_ROLE } from '../../../../data/hero.data';
import { RoleType } from '../../../../core/models/portfolio.model';
import { WhatsAppFloatComponent } from '../../../../shared/components/whatsapp-float/whatsapp-float.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, WhatsAppFloatComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css',
})
export class HeroSectionComponent implements AfterViewInit {
  roleService = inject(RoleService);
  langService = inject(LanguageService);

  @ViewChild('bgVideo') bgVideoElement?: ElementRef<HTMLVideoElement>;

  readonly cvDownloadUrl = 'assets/documents/miguel-souop-cv.pdf';

  private readonly heroVideos: Record<RoleType, string> = {
    'Développeur Fullstack': 'assets/videos/dev.mp4',
    'Ethical Hacker': 'assets/videos/hack.mp4',
    'UI/UX Designer':
      'https://assets.mixkit.co/videos/preview/mixkit-abstract-flowing-pink-lines-41221-large.mp4',
  };

  heroContent = computed(() => {
    const lang = this.langService.currentLang();
    const role = this.roleService.activeRole();
    return HERO_BY_ROLE[role][lang];
  });

  currentVideoUrl = computed(() => this.heroVideos[this.roleService.activeRole()]);

  constructor() {
    effect(() => {
      this.currentVideoUrl();
      setTimeout(() => this.playVideo(), 50);
    });
  }

  ngAfterViewInit(): void {
    this.playVideo();
  }

  private playVideo(): void {
    const video = this.bgVideoElement?.nativeElement;
    if (video) {
      video.muted = true; // Obligatoire pour l'autoplay
      // `play()` peut renvoyer `undefined` (ex: jsdom en tests) — on ne chaîne donc pas sans garde.
      video.play()?.catch((error) => {
        console.warn('Autoplay bloqué ou erreur de lecture vidéo :', error);
      });
    }
  }

  scrollTo(sectionId: string): void {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }
}
