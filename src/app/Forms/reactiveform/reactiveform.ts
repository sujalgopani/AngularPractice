import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-reactiveform',
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


  
}
