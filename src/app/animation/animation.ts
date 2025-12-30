import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { trigger, transition, style, animate, query, group } from '@angular/animations';

@Component({
  selector: 'app-animation',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './animation.html',
  styleUrl: './animation.css',
  animations:[
    trigger('RouterAnimation',[
      transition('* <=> *',[
        query(':enter, :leave',[
          style({
            position:'absolute',
            width:'100%',
            opacity:0
          })
        ],{optional:true}),

        query(':enter',[
          animate('500ms ease',style({opacity:1}))
        ],{optional:true})

      ])
    ])
  ]
})
export class Animation {

  prepare(outlet:RouterOutlet){
    return outlet.activatedRouteData?.['animation'];
  }

}
