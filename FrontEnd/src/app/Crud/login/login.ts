import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Studentcrud } from '../Service/studentcrud';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private service = inject(Studentcrud);
  Isloading = false;
  loginform = new FormGroup({
    Uname: new FormControl(''),
    Password: new FormControl(''),
  });

  private router = inject(Router);
  Isseen = false;

  ChangeView(){
    this.Isseen = !this.Isseen;
  }

  onLogin() {
    this.Isloading = true;
    this.service.LoginAndroleCheck(this.loginform.value).subscribe({
      next: (res: any) => {
        this.Isloading = false;
        console.log(res);
        localStorage.setItem('username', res.username);
        localStorage.setItem('role', res.role);
        localStorage.setItem('token', res.token);
        if (res.role === 'Admin') {
          this.router.navigate(['/adminnav']);
        }
        if (res.role === 'Student') {
          this.router.navigate(['/studentnav']);
        }
      },
      error: () => {
        this.Isloading = false;
        alert('Invalid Username or Password');
      },
    });
  }
}
