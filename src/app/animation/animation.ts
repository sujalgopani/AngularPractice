import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { trigger, transition, style, animate, query, group } from '@angular/animations';

@Component({
  selector: 'app-animation',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './animation.html',
  styleUrl: './animation.css',
  animations: [
    trigger('routeAnimation', [
      transition('* <=> *', [
        query(':enter, :leave', [
          style({
            position: 'absolute',
            width: '100%'
          })
        ], { optional: true }),
    
        query(':enter', [
          style({ opacity: 0 })
        ], { optional: true }),
    
        query(':leave', [
          style({ opacity: 1 }),
          animate('300ms ease-out', style({ opacity: 0 }))
        ], { optional: true }),
    
        query(':enter', [
          animate('300ms ease-out', style({ opacity: 1 }))
        ], { optional: true }),
      ])
    ]),
  ]
})
export class Animation {

  prepare(outlet: RouterOutlet){
    return outlet?.activatedRouteData?.['animation'];
  }

}
