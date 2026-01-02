import { Validator } from '@angular/forms';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ɵInternalFormsSharedModule,
  ReactiveFormsModule,
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
  ValueChangeEvent,
} from '@angular/forms';

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

}
