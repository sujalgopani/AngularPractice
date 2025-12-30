import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { App } from './app/app';
import { routes } from './app/app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';

// bootstrapApplication(App, appConfig)
// .catch((err) => console.error(err));

bootstrapApplication(App,{
  providers:[
    provideRouter(routes)
  ],
})