import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners
} from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    //provideAnimations(),
    provideRouter(appRoutes, withComponentInputBinding()),
    //provideToolbar({enabled: isDevMode()}),
  ],
};
