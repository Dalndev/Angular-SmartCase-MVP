import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners
} from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { appRoutes } from './app.routes';
import provideCaseRepository from '~infra/repositories/case/icase.repository';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    //provideAnimations(),
    provideRouter(appRoutes, withComponentInputBinding()),
    provideCaseRepository(),
    //provideToolbar({enabled: isDevMode()}),
  ],
};
