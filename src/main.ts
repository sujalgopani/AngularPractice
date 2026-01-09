import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { App } from './app/app';
import { routes } from './app/app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { loggingInterceptor } from './app/Http/configservice';

// bootstrapApplication(App, appConfig)
// .catch((err) => console.error(err));

bootstrapApplication(App,{
  providers:[
    provideRouter(routes),
    provideHttpClient(withInterceptors([loggingInterceptor])) // functional registration
  ],
})
