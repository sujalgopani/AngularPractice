import { Component, inject, input, Input } from "@angular/core";
import { ActivatedRoute, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-parent',
  template: `
      <h1>Parent</h1>
      @if(is === 'true'){
        <h3>{{head}} fired</h3>
        <p>{{id}}</p>
        <p>{{is}}</p>
      }
      <router-outlet></router-outlet>
   `,
  imports: [RouterOutlet]
})

export class Parent { 
  id!:string;
  is!:string;
  head!:string;
  constructor(private item : ActivatedRoute){
    item.params.subscribe(e=>{
      this.id = e['sujalneed'];
      this.is = e['sujalhasmoney'];
      this.head = e['mainheading'];
      console.log(e.toString());
    })
  }
}