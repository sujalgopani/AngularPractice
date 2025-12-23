import { bootstrapApplication } from '@angular/platform-browser';
import { PreloadAllModules, provideRouter, RouteReuseStrategy, withComponentInputBinding, withNavigationErrorHandler, withPreloading, withRouterConfig } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { App } from './app/app';
import { appConfig } from './app/app.config';
import { routes } from './app/app.routes';
import { CustomRouteReuseStrategy } from './app/Routereusestrategy/CustomRouteReuseStrategy ';
import { Preloadingst } from './app/Preloadingstrategy/Preloadingst';


// bootstrapApplication(App, appConfig)
// .catch((err) => console.error(err));

bootstrapApplication(App,{
  providers:[
    provideRouter(
      routes,withComponentInputBinding(),withPreloading(Preloadingst)
    )
  ],
})