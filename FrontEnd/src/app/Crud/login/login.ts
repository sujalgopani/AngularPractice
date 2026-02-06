import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Studentcrud } from '../Service/studentcrud';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private service = inject(Studentcrud);
  loginform = new FormGroup({
    Uname: new FormControl(''),
    Password: new FormControl(''),
  });

  private router= inject(Router);

  onLogin(){

 this.service.LoginAndroleCheck(this.loginform.value)
 .subscribe({

   next:(res:any)=>{
     console.log(res);
      localStorage.setItem("Username",res.username)
      localStorage.setItem("Role",res.role)
      localStorage.setItem("Token",res.token)
      if(res.role === "Admin"){this.router.navigate(['/Adminnav'])};
      if(res.role === "Student"){this.router.navigate(['/StudentNav'])};
   },
   error:()=>{
     alert("Invalid Username or Password");
   }
 });

}

}
