import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add',
  imports: [ReactiveFormsModule],
  templateUrl: './add.html',
  styleUrl: './add.css',
})
export class Add {

  AddForm = new FormGroup({
    Sid  : new FormControl(''),
    Sname  : new FormControl(''),
    Dob  : new FormControl(''),
    Adress  : new FormControl(''),
    City  : new FormControl(''),
    State  : new FormControl(''),
    Country  : new FormControl(''),
    Contact  : new FormControl(''),
    Email  : new FormControl(''),
    Cources  : new FormControl(''),
    Comment  : new FormControl(''),
    Gender  : new FormControl('')
  })

  Addstudent(){
    console.log(this.AddForm.value);
  }
}
