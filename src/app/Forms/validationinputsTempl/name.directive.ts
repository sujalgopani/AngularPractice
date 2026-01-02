import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
// import { Directive, Input } from "@angular/core";
// import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

import { Directive, Input } from "@angular/core";
import { hasUncaughtExceptionCaptureCallback } from 'process';

// @Directive({
//   selector: '[appUnwantedWorld]',
//   providers: [
//     {
//       provide: NG_VALIDATORS,
//       useExisting: UnwantedNameAllow,
//       multi: true
//     }
//   ]
// })
// export class UnwantedNameAllow implements Validator {

//   @Input('appUnwantedWorld') blockword: string[] = [];

//   validate(control: AbstractControl): ValidationErrors | null {
//     if (!control.value) return null;

//     const val = control.value.toLowerCase();

//     const isUnwanted = this.blockword
//       .map(user => user.toLowerCase())
//       .includes(val);

//     return isUnwanted ? { isUnwanted: true } : null;
//   }
// }


@Directive({
  selector:'[appnotallowword]',
  providers:[{
    provide:NG_VALIDATORS,
    useExisting:unwanteddetect,
    multi:true
  }]
})

export class unwanteddetect implements Validator{
  @Input('appnotallowword') blocklist:string[]=[];

  validate(control: AbstractControl): ValidationErrors | null {
    if(!control.value)return null;
    const val = control.value;
    const isworld = this.blocklist.map(user=>user.toLowerCase()).includes(val);
    return isworld ? {isdeitect:true}:null;
  }

}
