import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Blockuserdetect, crossvalidation, unwanteddetect } from './name.directive';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-validationinputs',
  standalone: true,
  imports: [FormsModule,unwanteddetect,crossvalidation,RouterLink,Blockuserdetect],
  templateUrl: './validationinputs.html',
  styleUrl:'./validationinputs.css'
})


export class Validationinputs {
  user = { fname: '' };
  blockuser = ['sujal','block','admin'];

  // cross validation
  crossvalid = {fname:'',lname:''}

  // async validation
  asyncvalid = {username:''}

  show(msg:any){
    console.log(msg.value)
  }
}
