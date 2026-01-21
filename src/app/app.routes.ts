import { serverRoutes } from './app.routes.server';
import { RenderMode } from '@angular/ssr';
import { Routes } from '@angular/router';
import { PageNotFound } from './NotFound/PageNotFound';
import { Ulogin } from './ulogin/ulogin';
import { Reactiveform } from './Forms/reactiveform/reactiveform';
import { Templateform } from './Forms/templateform/templateform';
import { Signalform } from './Forms/signalform/signalform';
import { Validationinputs } from './Forms/validationinputsTempl/validationinputs';
import { Validationinputreactive } from './Forms/validationinputreactive/validationinputreactive';
import { Dynamicforms } from './Forms/dynamicforms/dynamicforms';
import { Httpreq } from './Http/httpreq/httpreq';
import { Accordion } from './Angular Aria/accordion/accordion';
import { Autocomplete } from './Angular Aria/autocomplete/autocomplete';
import { Animatingapp } from './animation/AnimatingApp/animatingapp/animatingapp';
import { Dragdrop } from './dragdrop/dragdrop';

export const routes: Routes = [
  {
    path:'',
    component:Ulogin
  },
  {
    path:'Reactive-form',
    component:Reactiveform
  },
  {
    path:'Template-form',
    component:Templateform
  },
  {
    path:'Signal-form',
    component:Signalform
  },
  {
    path:'Validation-Template',
    component:Validationinputs,
  },
  {
    path:"Validation-Reactive",
    component:Validationinputreactive
  },
  {
    path:"Dynamic-Data",
    component:Dynamicforms
  },
  {
    path:"Http-req",
    component:Httpreq
  },
  {
    path:'Angular/Accordion',
    component:Accordion
  },
  {
    path:'Angular/Auto-Complete',
    component:Autocomplete
  },
  {
    path:'Angular/Animation',
    component:Animatingapp
  },
  {
    path:'Angular/dnd',
    component:Dragdrop
  },
  {
    path:'**',
    component:PageNotFound
  },

];
