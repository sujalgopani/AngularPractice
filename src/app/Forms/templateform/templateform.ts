import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


// this is the schema of the template form
export class Actor {
  constructor(public email: string, public psw: string, public skills: string) {}
}


@Component({
  selector: 'app-templateform',
  imports: [RouterLink, FormsModule, JsonPipe],
  templateUrl: './templateform.html',
  styleUrl: './templateform.css',
})
export class Templateform {
  fname = '';

  // Sample Template Form
  user = {
    email: '',
    psw: '',
    skills: '',
  };

  skill = ['Dance', 'Swim', 'Lead', 'Communicate', 'Other'];

  submit(form: any) {
    console.log(form.value);
  }

  // this is the reset form from the front and to backend side
  model = new Actor('','','');
  ResetForm(){
    this.model = new Actor('','','');
  }

  // responce form submission
  sumitted = false;
  reposnce(){
    console.log('submitted !')
    this.sumitted = true;
  }
  
  submittoggle(){
    this.sumitted = !this.sumitted;
  }
}
