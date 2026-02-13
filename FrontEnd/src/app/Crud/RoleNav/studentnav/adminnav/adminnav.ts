import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-adminnav',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './adminnav.html',
  styleUrl: './adminnav.css',
})

export class Adminnav {
  private router = inject(Router);
  Username = localStorage.getItem("username") ?? "Student";
  LogOut() {
    const IsConform = confirm("Are You Sure Log-Out ?")
    if(IsConform){
    localStorage.removeItem('username');
    localStorage.removeItem('role');
    localStorage.removeItem('token');
    this.router.navigate(['']);
    }
  }
}
