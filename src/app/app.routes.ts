import { Routes } from '@angular/router';
import { Navv } from './nav/nav';
import { PageNotFound } from './NotFound/PageNotFound';
import { Ulogin } from '../ulogin/ulogin';
import { Parent } from './parent/parent';


export const routes: Routes = [
  { 
    path:'',
    component:Navv
  },
  {
    path: 'org',
    loadComponent:()=>import("../ulogin/ulogin").then(r=>r.Ulogin),
    data:{preload:true}
  },
  {
    path:'par',
    loadComponent:()=>import("./parent/parent").then(r=>r.Parent),
    data:{preload:false}  
  },
  {
    path:'**',
    component:PageNotFound
  }
];
