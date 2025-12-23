import { Component, inject, signal } from '@angular/core';
import { Router, NavigationError, RouterOutlet, NavigationStart, NavigationEnd, NavigationCancel } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
  @if (loading()) {
      <div class="loader">Loading...</div>
    }
    <router-outlet />
    @if (error()) {
      <div class="error">{{ error() }}</div>
    }
  `
})

export class App {
  private router = inject(Router);

  loading = signal(false);
  error = signal('');

  constructor() {
    // this.router.events.subscribe(event => {

    //   if (event instanceof NavigationStart) {
    //     this.loading.set(true);
    //     this.error.set('');
    //   }

    //   if (event instanceof NavigationEnd) {
    //     this.loading.set(false);
    //     console.log('Analytics: Page view', event.url);
    //   }

    //   if (event instanceof NavigationCancel) {
    //     this.loading.set(false);
    //     console.warn('Navigation Cancelled');
    //   }

    //   if (event instanceof NavigationError) {
    //     this.loading.set(false);
    //     this.error.set('Navigation failed!');
    //     console.error(event.error);
    //   }
    // });
  }

}
