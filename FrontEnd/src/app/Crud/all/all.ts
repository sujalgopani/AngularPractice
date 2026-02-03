import { CommonModule } from '@angular/common';
import { Studentcrud } from './../Service/studentcrud';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-all',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './all.html',
  styleUrl: './all.css',
})
export class All implements OnInit {
  // studentObj: any = {
  //   studentid: 0,
  //   studentname: '',
  //   dob: '',
  //   address: '',
  //   city: '',
  //   state: '',
  //   country: '',
  //   contact: 0,
  //   email: '',
  //   cources: '',
  //   comment: '',
  // };

  // so it's a help to refresh page when the something is change in the angular
  private cdr = inject(ChangeDetectorRef);

  service = inject(Studentcrud);
  students: any[] = [];
  loading = false;

  ngOnInit(): void {
    this.GetAllStudent();
  }

 GetAllStudent() {
  this.loading = true;

  this.service.GetAllStudentService().subscribe({
    next: (res: any) => {
      this.students = res;
      this.loading = false;

      this.cdr.detectChanges();
    },
    error: (err: any) => {
      this.loading = false; // ⭐ important
      console.log(err);
    },
  });
}

}
