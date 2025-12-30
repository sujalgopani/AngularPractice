import { Component, inject } from '@angular/core';
import { consumerBeforeComputation } from '@angular/core/primitives/signals';
import { Router, RouterLink, RouterOutlet, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-ulogin',
  template: `
    <h2>Login Page Admin</h2>
    <a [routerLink]="['Reactive-form']">Go To Reactive Form</a>
    <hr>
    <a [routerLink]="['Template-form']">Go To Template Form</a>
    <hr>
    <a [routerLink]="['Signal-form']">Go To Template Form</a>
    <router-outlet></router-outlet>
  `,
  imports: [RouterOutlet,RouterLink],
})


export class Ulogin {
  
  
}
