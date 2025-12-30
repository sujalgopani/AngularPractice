import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-templateform',
  imports: [RouterLink,FormsModule],
  templateUrl: './templateform.html',
  styleUrl: './templateform.css',
})
export class Templateform {
  favoriteColor = '';

}
