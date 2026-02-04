import { CommonModule } from '@angular/common';
import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Studentcrud } from '../Service/studentcrud';

@Component({
  selector: 'app-update',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './update.html',
  styleUrl: './update.css',
})
export class Update {
  Service = inject(Studentcrud);
  private cdr = inject(ChangeDetectorRef);
  Searchbar = new FormGroup({
    Sid: new FormControl<number | null>(null,Validators.required),
  });

  Updatefrom = new FormGroup({
    studentname: new FormControl(''),
    dob: new FormControl(''),
    address: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    country: new FormControl(''),
    contact: new FormControl(''),
    email: new FormControl(''),
    cources: new FormControl(''),
    comment: new FormControl(''),
  });

  StudentByid: any[] = [];

  IsSearched = false;
  IsUpdate = false;

  SearchBtn() {
    const StudentId = this.Searchbar.get('Sid')?.value;
    console.log(this.Searchbar.value);
    this.IsSearched = true;

    if (!StudentId) {
      alert('Please enter Student ID');
      return;
    }
    this.Service.GetStudentById(StudentId).subscribe({
      next: (res: any) => {
        if (!res) {
          this.IsSearched = false;
          alert('Student not found ❌');
          return;
        }
        this.StudentByid = res;
        this.Updatefrom.patchValue({
          studentname: res.studentname,
          dob: res.dob?.split('T')[0],
          address: res.address,
          city: res.city,
          state: res.state,
          country: res.country,
          contact: res.contact,
          email: res.email,
          cources: res.cources,
          comment: res.comment,
        });
      },
      error: (err: any) => {
        console.log('err');
      },
    });
  }

  UpdateBtn() {
    const StudentId = this.Searchbar.get('Sid')?.value;
    this.Service.UpdateStudent(StudentId!, this.Updatefrom.value).subscribe({
      next: (res: any) => {
        this.IsUpdate = true;
        console.log('Update Done !');
        setTimeout(() => {
          this.IsSearched = false;
          this.IsUpdate = false;
          this.cdr.detectChanges();
        }, 1000);
        this.Searchbar.reset();
      },
      error: (err: any) => {
        console.log('Update Error !');
      },
    });
  }
}
