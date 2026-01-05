
import { AsyncValidator } from '@angular/forms';
import { Component, inject, Injectable } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { catchError, delay, map, Observable, of } from 'rxjs';
import { toUSVString } from 'util';


export function forbiddenAdminValidator(testdata: string[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null;
    }
    const value = control.value;
    const isForbidden = testdata.map((user) => user.toLowerCase()).includes(value);
    return isForbidden ? { forbiddenAdmin: true } : null;
  };
}

export const unambiguousRoleValidator: ValidatorFn = (
  control: AbstractControl,
): ValidationErrors | null => {
  const name = control.get('name');
  const role = control.get('role');
  return name && role && name.value === role.value ? {unambiguousRole: true} : null;
};

// for thec cross validation
export const testing:ValidatorFn=(constrol:AbstractControl,):ValidationErrors|null=>{
  const fname = constrol.get('fname');
  const lname = constrol.get('lname');
  return fname && lname && fname.value === lname.value ? {ismatch:true} : null;
}

// async validation (basic)
@Injectable({providedIn:'root'})
export class blockusers implements AsyncValidator{
  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return new Promise(res=>{
      setTimeout(() => {
        if(control.value === "sujal"){res({adminBlocked:true})}
        else {res(null)}
      }, 500)
    })
  }
}


@Injectable({providedIn:'root'})
export class userservice{
  blockuser = ['sujal','admin'];
  isnametaken(username:string):Observable<boolean>{
    const istaken = this.blockuser.includes(username?.toLowerCase());
    return of(istaken).pipe(delay(1000));
  }
}

@Injectable({providedIn:'root'})
export class blockuserdetect implements AsyncValidator{
  blockuserlist = inject(userservice);
  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.blockuserlist.isnametaken(control.value).pipe(
      map(isken=>(isken ? {adminBlocked:true}: null)),
      catchError(()=>of(null))
    )
  }
}


@Component({
  selector: 'app-validationinputreactive',
  imports: [ReactiveFormsModule],
  templateUrl: './validationinputreactive.html',
  styleUrl: './validationinputreactive.css',
})
export class Validationinputreactive {
  user = {
    fname: '',
    role: '',
    skills: '',
  };

  blockedUsers = ['admin', 'superadmin', 'root'];

  userform = new FormGroup({
    fname: new FormControl(this.user.fname, [
      Validators.required,
      Validators.minLength(3),
      forbiddenAdminValidator(this.blockedUsers),
    ]),
    role: new FormControl(this.user.role),
    skill: new FormControl(this.user.skills),
  });

  get fname(){
    return this.userform.get('fname')
  }

  // CROSS VALIFATION FIELD
  crossfieldvalidation = new FormGroup({
    fname : new FormControl(''),
    lname: new FormControl('')
  },
  {validators:testing}
  )

  // async validation
  block = inject(blockusers);
  finalblock = inject(blockuserdetect);
  // username = new FormControl('',[],[this.block.validate.bind(this.block)]   // async validator(basic)
  username = new FormControl('',[],[this.finalblock.validate.bind(this.finalblock)]) //(advanced) service => validator => component+html
}
