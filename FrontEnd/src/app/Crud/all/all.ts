import { CommonModule } from '@angular/common';
import { Studentcrud } from './../Service/studentcrud';
import { Component } from '@angular/core';

@Component({
  selector: 'app-all',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './all.html',
  styleUrl: './all.css',
})
export class All {
  constructor(private service: Studentcrud) {}
  students: any[] = [];
  loading = false;

  ngOnInit() {
    debugger;
    console.log('ngOnInit called, fetching students...');
    this.GetAllStudent();
  }

  GetAllStudent() {
    debugger;
    this.loading = true;
    this.service.GetAllStudent().subscribe({
      next: (res) => {
        debugger;
        this.students = res;
        this.loading = false;
      },
      error: (err) => {
        console.error('API ERROR:', err);
        this.loading = false;
      },
    });
  }
}
