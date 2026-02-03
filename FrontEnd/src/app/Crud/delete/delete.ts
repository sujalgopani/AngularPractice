import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-delete',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './delete.html',
  styleUrl: './delete.css',
})
export class Delete {
  Searchbar = new FormGroup({
    Sid: new FormControl(''),
  });

  IsSearched = false;
  DeleteBtn(){
    console.log(this.Searchbar.value)
    this.IsSearched = true;
    setTimeout(() => {
      this.IsSearched = false;
    }, 500);
  }
}
