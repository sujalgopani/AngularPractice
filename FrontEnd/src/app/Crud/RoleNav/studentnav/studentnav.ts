import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-studentnav',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './studentnav.html',
  styleUrl: './studentnav.css',
})
export class Studentnav {
  private router = inject(Router);
  
  LogOut() {
    const IsConform = confirm("Are You Sure Log-Out ?")
    if(IsConform){
    localStorage.removeItem('Username');
    localStorage.removeItem('Role');
    this.router.navigate(['']);
    }
  }
}
