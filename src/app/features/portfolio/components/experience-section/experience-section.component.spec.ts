import { TestBed } from '@angular/core/testing';
import { ExperienceSectionComponent } from './experience-section.component';
import { RoleService } from '../../../../core/services/role.service';
import { LanguageService } from '../../../../core/services/language.service';

describe('ExperienceSectionComponent', () => {
  async function setup() {
    await TestBed.configureTestingModule({
      imports: [ExperienceSectionComponent],
    }).compileComponents();
    const fixture = TestBed.createComponent(ExperienceSectionComponent);
    await fixture.whenStable();
    fixture.detectChanges();
    return fixture;
  }

  function rows(fixture: { nativeElement: HTMLElement }): HTMLElement[] {
    return Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll<HTMLElement>('.experience-row--item'),
    );
  }

  it('renders the section table with the rows of the active role', async () => {
    const fixture = await setup();
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelector('#experience')).toBeTruthy();

    const items = rows(fixture);
    // Casquette par défaut : Développeur Fullstack (4 entrées)
    expect(items.length).toBe(4);
    expect(items[0].textContent).toContain('Rollo Technologies');
    expect(items[0].textContent).toContain('Développeur Fullstack');
    expect(element.textContent).not.toContain('Pentester Junior');
  });

  it('re-filters the rows when the active role changes', async () => {
    const fixture = await setup();
    const roleService = TestBed.inject(RoleService);

    roleService.setRole('Ethical Hacker');
    await fixture.whenStable();
    fixture.detectChanges();

    const items = rows(fixture);
    expect(items.length).toBe(2);
    expect(fixture.nativeElement.textContent).toContain('Pentester Junior');
    expect(fixture.nativeElement.textContent).not.toContain('Formation en Développement Python');
  });

  it('switches the section labels when the language changes', async () => {
    const fixture = await setup();
    const langService = TestBed.inject(LanguageService);

    langService.toggleLanguage();
    await fixture.whenStable();
    fixture.detectChanges();

    expect((fixture.nativeElement as HTMLElement).textContent).toContain('EXPERIENCE');
  });

  it('translates the experience rows when the language changes', async () => {
    const fixture = await setup();
    const langService = TestBed.inject(LanguageService);

    langService.toggleLanguage();
    await fixture.whenStable();
    fixture.detectChanges();

    const text = (fixture.nativeElement as HTMLElement).textContent ?? '';

    // Périodes et intitulés traduits en anglais
    expect(text).toContain('2026 — Present');
    expect(text).toContain('Fullstack Developer');
    expect(text).toContain('Computer Science Student');
    expect(text).toContain('PHP Development Training');
    // Plus de libellés FR
    expect(text).not.toContain('Auj.');
    expect(text).not.toContain('Etudiant en informatique');
  });
});
