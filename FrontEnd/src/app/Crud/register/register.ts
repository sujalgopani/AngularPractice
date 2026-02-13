import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Studentcrud } from '../Service/studentcrud';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  service = inject(Studentcrud);
  Isloading = false;
  IsRegiMsg = '';
  IsErrorMsg = '';
  private cdr = inject(ChangeDetectorRef);

  RegisterFrm = new FormGroup({
    uname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    roleId: new FormControl<number | null>(null),
  });

  RegisterNow() {
    this.IsErrorMsg = '';
    this.IsRegiMsg = '';
    if (this.RegisterFrm.invalid) {
      this.IsRegiMsg = 'Please fill all fields correctly!';
      this.Isloading = false; // ⭐ IMPORTANT
      this.IsErrorMsg = '';
      this.IsRegiMsg = '';
      return;
    }

    this.Isloading = true;

    this.service.RegisterUser(this.RegisterFrm.value).subscribe({
      next: (res) => {
        this.Isloading = false;
        this.IsRegiMsg = 'User Registered Successfully!';
        this.RegisterFrm.reset();
        this.IsErrorMsg = '';
      },
      error: (err) => {
        this.Isloading = false;
        this.IsErrorMsg = err?.error?.message || 'Something went wrong!';
        this.cdr.markForCheck();
        this.IsRegiMsg = '';
      },
    });
  }
}
