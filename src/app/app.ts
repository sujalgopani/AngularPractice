import { Component, inject, signal } from '@angular/core';
import { Router, NavigationError, RouterOutlet, NavigationStart, NavigationEnd, NavigationCancel, ActivatedRoute } from '@angular/router';

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
}
