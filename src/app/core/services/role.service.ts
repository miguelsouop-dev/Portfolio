import { Service, inject, signal } from '@angular/core';
import { RoleType } from '../models/portfolio.model';
import { PaletteService } from './palette.service';

const ROLE_BODY_CLASS: Record<RoleType, string> = {
  'Développeur Fullstack': 'role-dev',
  'Ethical Hacker': 'role-hacker',
  'UI/UX Designer': 'role-designer',
};

@Service()
export class RoleService {
  private readonly palette = inject(PaletteService);
  private readonly role = signal<RoleType>('Développeur Fullstack');

  readonly activeRole = this.role.asReadonly();

  constructor() {
    this.applyRoleClass(this.role());
  }

  setRole(role: RoleType): void {
    this.role.set(role);
    this.applyRoleClass(role);
  }

  private applyRoleClass(role: RoleType): void {
    if (typeof document === 'undefined') {
      return;
    }
    const body = document.body;
    Object.values(ROLE_BODY_CLASS).forEach((cls) => body.classList.remove(cls));
    body.classList.add(ROLE_BODY_CLASS[role]);

    // La couleur d'accent du rôle (et sa version atténuée) provient de la palette centralisée.
    this.palette.applyRoleAccent(role);
  }
}
