import { Component, numberAttribute } from '@angular/core';
import { userservice } from '../configservice';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-httpreq',
  imports: [ReactiveFormsModule],
  templateUrl: './httpreq.html',
  styleUrl: './httpreq.css',
})

export class Httpreq {
  constructor(private usersService: userservice) {}
  apiform= new FormGroup({
    ids :new FormControl('')
  })
   loadUsers() {
    const id = Number(this.apiform.get('ids')?.value);
    this.usersService.getUsers(id).subscribe(data => {
      if(data.length ===0){
        console.log(404)
      }else
      console.log('Users from API:', data);
    });
  }
}
