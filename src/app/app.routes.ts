import { Routes } from '@angular/router';
import { PageNotFound } from './NotFound/PageNotFound';
import { Parent } from './parent/parent';
import { ChildComponent } from './child/child';
import { Ulogin } from './ulogin/ulogin';
import { Animation } from './animation/animation';

export const routes: Routes = [
  { 
    path:'',
    component:Animation
  },
  {
    path:'Animation-Desk',
    component:Animation,
    children:[
      {path:'Parent',component:Parent, data:{ animation:'Parent'}},
      {path:'Child',component:ChildComponent,data:{ animation:'Child'}},
      {path:'ThirdParty',component:Ulogin,data:{ animation:'Third'}},
    ]
  },
  {
    path:'**',
    component:PageNotFound
  }
];
