import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { App } from './app/app';
import { routes } from './app/app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import { CustomAddHeader } from './app/Http/configservice';

// bootstrapApplication(App, appConfig)
// .catch((err) => console.error(err));

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([CustomAddHeader])), // functional registration
 ],
});
