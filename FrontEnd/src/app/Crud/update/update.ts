import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-update',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './update.html',
  styleUrl: './update.css',
})

export class Update {
  Searchbar = new FormGroup({
    Sid: new FormControl(''),
  });

  Updatefrom = new FormGroup({
    Sid: new FormControl(''),
    Sname: new FormControl(''),
    Dob: new FormControl(''),
    Adress: new FormControl(''),
    City: new FormControl(''),
    State: new FormControl(''),
    Country: new FormControl(''),
    Contact: new FormControl(''),
    Email: new FormControl(''),
    Cources: new FormControl(''),
    Comment: new FormControl(''),
    Gender: new FormControl(''),
  });


  IsSearched = false;
  UpdateBtn(){
    console.log(this.Searchbar.value)
    this.IsSearched = true;
    setTimeout(() => {
      this.IsSearched = false;
    }, 500);
  }
}
