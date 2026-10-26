import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { HeroSectionComponent } from './features/portfolio/components/hero-section/hero-section.component';
import { AboutSectionComponent } from './features/portfolio/components/about-section/about-section.component';
import { SkillsSectionComponent } from './features/portfolio/components/skills-section/skills-section.component';
import { ProjectsSectionComponent } from './features/portfolio/components/projects-section/projects-section.component';
import { ExperienceSectionComponent } from './features/portfolio/components/experience-section/experience-section.component';
import { ContactSectionComponent } from './features/portfolio/components/contact-section/contact-section.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    SkillsSectionComponent,
    ProjectsSectionComponent,
    ExperienceSectionComponent,
    ContactSectionComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('portofolio');
}
