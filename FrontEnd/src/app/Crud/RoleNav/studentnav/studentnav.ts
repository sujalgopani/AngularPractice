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
  Username = localStorage.getItem("username") ?? "Student";
  LogOut() {
    const IsConform = confirm('Are You Sure Log-Out ?');
    if (IsConform) {
      localStorage.removeItem('username');
      localStorage.removeItem('role');
      localStorage.removeItem('token');
      this.router.navigate(['']);
    }
  }
}
