import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
// import { Directive, Input } from "@angular/core";
// import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

import { Directive, inject, Input } from "@angular/core";
import { constrainedMemory, hasUncaughtExceptionCaptureCallback } from 'process';
import { delay, map, Observable, of } from 'rxjs';

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

  // custom validation
  @Input('appnotallowword') blocklist:string[]=[];

  validate(control: AbstractControl): ValidationErrors | null {
    if(!control.value)return null;
    const val =control.value.toLowerCase()
    const isworld = this.blocklist.map(user=>user.toLowerCase()).includes(val);
    return isworld ? {isdeitect:true}:null;
  }

}


// cross validation

@Directive({
  selector:'[appnamesame]',
  standalone:true,
  providers:[{
    provide:NG_VALIDATORS,
    useExisting:crossvalidation,
    multi:true
  }]
})


export class crossvalidation implements Validator{
  validate(control: AbstractControl): ValidationErrors | null {
    const fname = control.get('fname');
    const lname = control.get('lname');

    if(!fname && !lname) return null;

    return fname?.value === lname?.value ? {iscross:true} : null;
  }
}



// asynvvalidation

// @Directive({
//   selector:'[asynvalid]',
//   standalone:true,
//   providers:[
//     {
//       provide:NG_ASYNC_VALIDATORS,
//       useExisting:Blockuserdetect,
//       multi:true
//     }]
// })

// export class Blockuserdetect implements AsyncValidator{
//   validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
//     return of(control.value).pipe(
//       delay(1000),
//       map(val=>val=== 'admin'? {adminBlocked:true}:null)
//     );
//   }
// }


@Directive({
  selector:'[asynitem]',
  standalone:true,
  providers:[
    {
      provide:NG_ASYNC_VALIDATORS,
      useExisting:Blockuserdetect,
      multi:true
    }
  ]
})

export class Blockuserdetect implements AsyncValidator{
  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return of(control.value).pipe(
      delay(1000),
      map(val=>val ==="admin"?{adminBlocked:true}: null)
    )
  }
}
