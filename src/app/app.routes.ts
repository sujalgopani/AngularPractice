import { Routes } from '@angular/router';
import { PageNotFound } from './NotFound/PageNotFound';
import { Parent } from './parent/parent';
import { ChildComponent } from './child/child';
import { Ulogin } from './ulogin/ulogin';
import { Animation } from './animation/animation';
import { animation } from '@angular/animations';
import { Reactiveform } from './Forms/reactiveform/reactiveform';
import { Templateform } from './Forms/templateform/templateform';
import { Signalform } from './Forms/signalform/signalform';
import { Validationinputs } from './Forms/validationinputsTempl/validationinputs';
import { Validationinputreactive } from './Forms/validationinputreactive/validationinputreactive';
import { Dynamicforms } from './Forms/dynamicforms/dynamicforms';
import { Httpreq } from './Http/httpreq/httpreq';

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
    component:Validationinputs
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
    path:'**',
    component:PageNotFound
  }
];
