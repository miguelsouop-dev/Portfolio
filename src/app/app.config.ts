import { ApplicationConfig, inject, provideAppInitializer, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { PaletteService } from './core/services/palette.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    // Applique la palette centralisée (src/app/data/portofolio-colors.constants.ts)
    // avant le premier rendu, pour exposer les variables CSS utilisées par Tailwind.
    provideAppInitializer(() => {
      inject(PaletteService).apply();
    }),
  ]
};
