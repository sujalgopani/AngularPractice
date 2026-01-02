import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, FormRecord, isFormArray, isFormControl, isFormGroup, isFormRecord, ReactiveFormsModule, StatusChangeEvent, TouchedChangeEvent, Validators, ValueChangeEvent } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-reactiveform',
    standalone: true,
  imports: [ReactiveFormsModule, RouterLink,CommonModule],
  templateUrl: './reactiveform.html',
  styleUrl: './reactiveform.css',
})

export class Reactiveform {
  profileresult :any[] = [];

  // using  formgroup formcontrol
  profiledetail = new FormGroup({
    fname: new FormControl(''),
    lname: new FormControl(''),
    age : new FormControl(''),
    adress : new FormGroup({
      street: new FormControl(''),
      landmark: new FormControl(''),
      city: new FormControl(''),
      zipcode: new FormControl('')
    })
  })

  dis(){
    this.profileresult.push(this.profiledetail.value);
    this.profiledetail.reset();
  }

  // using FormBuilder
  profilebuilder: any[] = [];
  private formbuilder = inject(FormBuilder);
  profilebybuilder = this.formbuilder.group({
    firstname:['',Validators.required],
    lastname:[''],
    adress: this.formbuilder.group({
      city:[''],
      zip:['']
    }),
    hobby : this.formbuilder.array([this.formbuilder.control('')])
  })

  disbybyuilder(){
    this.profilebuilder.push(this.profilebybuilder.value);
    this.profilebybuilder.reset();
    // console.log(this.profilebuilder.values.toString)
  }

  get hobby(){
    return this.profilebybuilder.get('hobby') as FormArray;
  }

  addhob(){
    return this.hobby.push(this.formbuilder.control(''));
  }

  removehob(index : number){
    return this.hobby.removeAt(index);
  }

  // form array directive
  //  Sujal = new FormArray([
  //   new FormControl('fish'),
  //   new FormControl('cat'),
  //   new FormControl('dog'),
  // ]);

  // form events
  testing = new FormGroup({
    test: new FormControl(''),
  })

  constructor(){
    this.testing.events.subscribe((e)=>{
        if(e instanceof ValueChangeEvent){
          console.log("Value Changed ", e.value)
        }
        if(e instanceof StatusChangeEvent){
          console.log("Status Chnaged ",e.status)
        }
        if(e instanceof TouchedChangeEvent){
          console.log("touch Untouch ",e.touched)
        }

    })
  }

  // Here is one complete, real Angular example showing ALL 4 utility functions

  form = new FormGroup({
    name: new FormControl('Sujal'),
    skills: new FormArray([
      new FormControl('Angular'),
      new FormControl('React'),
    ]),
    settings: new FormRecord({
      theme: new FormControl('dark'),
      language: new FormControl('en')
    })
  });

  inspect(con : AbstractControl){
    if(isFormControl(con)){
      console.log("Array Form : ",con.value);
    }
    if(isFormArray(con)){
      console.log("Form array : ",con.length);
    }
    if(isFormRecord(con)){
      console.log("Form record : ",Object.keys(con.controls));
    }
  }


  // type form
  login = new FormGroup({
    // nonNullale Is help to not alllow to reset value in the form control
    email : new FormControl('test@gmail.com',{nonNullable:true}),
    psw: new FormControl(''),
  });


  username(){
    const email = this.login.value.email;
    this.login.reset();
    console.log(email); // if the nonNullable is not available then value is become null but here it is so not null
  }

  explittype(){
    const explititype = new FormControl<string | null>(null);
    explititype.setValue("Explicit Type")
    console.log(explititype.value);
  }
}
