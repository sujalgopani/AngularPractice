import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, RouteReuseStrategy, TitleStrategy, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { Globally } from './Routing/CustomTittle';
import { CustomRouteReuseStrategy } from './Routereusestrategy/CustomRouteReuseStrategy ';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes,withComponentInputBinding()), provideClientHydration(withEventReplay()),
    {provide: RouteReuseStrategy,useClass:CustomRouteReuseStrategy},
  ]
};
