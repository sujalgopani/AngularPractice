import { Component, computed, inject} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink, RouterOutlet, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})

export class Navv {
  item = inject(Router);

  gotoorg(){
    this.item.navigate(['/org'])  
  }

}