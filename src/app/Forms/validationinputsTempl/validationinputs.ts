import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { unwanteddetect } from './name.directive';


@Component({
  selector: 'app-validationinputs',
  standalone: true,
  imports: [FormsModule,unwanteddetect ],
  templateUrl: './validationinputs.html',
  styleUrl:'./validationinputs.css'
})
export class Validationinputs {
  user = { fname: '' };
  blockuser = ['sujal','block','admin'];
}
