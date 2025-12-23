import { Component, Inject, Optional, Self, SkipSelf, Host, inject, ContentChild } from "@angular/core";
import { Parent } from "../parent/parent";
import { ROUTER_OUTLET_DATA, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-child',
  template: `
    <h3>Child Component</h3>
    <router-outlet></router-outlet>
  `,
  imports: [RouterOutlet]
})

export class ChildComponent {
  
}
