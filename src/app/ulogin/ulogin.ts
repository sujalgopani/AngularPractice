import { Component, inject } from '@angular/core';
import { consumerBeforeComputation } from '@angular/core/primitives/signals';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-ulogin',
  template: `
    <h2>Login Page Admin</h2>
    <router-outlet></router-outlet>
  `,
  imports: [RouterOutlet],
})
export class Ulogin {
  
  
}
