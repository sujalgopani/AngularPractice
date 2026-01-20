import { Accordion } from './../Angular Aria/accordion/accordion';
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
    <a [routerLink]="['Signal-form']">Go To Signalform Form</a>
    <hr>
    <a [routerLink]="['Validation-Template']">Go To Validation Side(Template)</a>
    <hr>
    <a [routerLink]="['Validation-Reactive']">Go To Validation Side(Reactive)</a>
     <hr>
    <a [routerLink]="['Dynamic-Data']">Go To DynamicForm (Reactive)</a>
     <hr>
    <a [routerLink]="['Http-req']">Go To Http Side</a>

    <hr>
    <h4>Angular Aria</h4>
    <ul>
      <li><a [routerLink]="['Angular/Accordion']">Accordion</a></li>
      <li><a [routerLink]="['Angular/Auto-Complete']">Auto Complete</a></li>
    </ul>
    <hr>
    <a [routerLink]="['Angular/Animation']">Go To Angular Animation</a>

    <router-outlet></router-outlet>
  `,
  imports: [RouterOutlet,RouterLink],
})


export class Ulogin {


}
