import { Component, inject, input, Input } from "@angular/core";
import { ActivatedRoute, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-parent',
  template: `
      <h1>Parent</h1>
      <router-outlet></router-outlet>
   `,
  imports: [RouterOutlet]
})

export class Parent { 
 
}