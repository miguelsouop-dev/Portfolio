import { TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { RoleService } from '../../../core/services/role.service';
import { LanguageService } from '../../../core/services/language.service';

describe('FooterComponent', () => {
  async function setup() {
    await TestBed.configureTestingModule({
      imports: [FooterComponent],
    }).compileComponents();
    const fixture = TestBed.createComponent(FooterComponent);
    await fixture.whenStable();
    fixture.detectChanges();
    return fixture;
  }

  it('renders the punchy description of the default role (FR)', async () => {
    const fixture = await setup();
    const text = (fixture.nativeElement as HTMLElement).textContent ?? '';

    expect(text).toContain('Miguel Souop');
    expect(text).toContain(
      'Transformer la complexité technique en produits digitaux scalables, performants et orientés utilisateur.',
    );
    expect(text).not.toContain('lorem');
    expect(text).toContain('©');
    expect(text).toContain('Tous droits réservés.');
  });

  it('updates the description when the active role changes', async () => {
    const fixture = await setup();
    const roleService = TestBed.inject(RoleService);

    roleService.setRole('Ethical Hacker');
    await fixture.whenStable();
    fixture.detectChanges();

    const text = (fixture.nativeElement as HTMLElement).textContent ?? '';
    expect(text).toContain(
      'Anticiper les menaces et fortifier les infrastructures pour bâtir un écosystème numérique impénétrable.',
    );
    expect(text).toContain('Cybersécurité');

    roleService.setRole('UI/UX Designer');
    await fixture.whenStable();
    fixture.detectChanges();

    expect((fixture.nativeElement as HTMLElement).textContent).toContain(
      "Sculpter des expériences visuelles intuitives où chaque détail graphique sert l'émotion et l'usage.",
    );
  });

  it('switches description, nav labels and closing metadata to English', async () => {
    const fixture = await setup();
    const langService = TestBed.inject(LanguageService);

    langService.toggleLanguage();
    await fixture.whenStable();
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    const text = element.textContent ?? '';

    expect(text).toContain(
      'Transforming technical complexity into scalable, high-performance, and user-centric digital products.',
    );
    expect(text).toContain('All rights reserved.');
    expect(text).toContain('Thanks for visiting.');

    // Les ancres sont bilingues
    const buttons = Array.from(element.querySelectorAll('nav button')).map((b) => b.textContent?.trim());
    expect(buttons).toEqual(['Home', 'About', 'Skills', 'Projects', 'Contact']);
  });

  it('uses only centralized color tokens (no hardcoded hex in the template)', async () => {
    const fixture = await setup();
    const html = (fixture.nativeElement as HTMLElement).innerHTML;

    expect(html).not.toMatch(/#[0-9A-Fa-f]{3,8}/);
  });
});
