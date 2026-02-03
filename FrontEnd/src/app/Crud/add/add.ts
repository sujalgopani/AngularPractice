import { Component, inject, ChangeDetectorRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Studentcrud } from '../Service/studentcrud';

@Component({
  selector: 'app-add',
  imports: [ReactiveFormsModule],
  standalone: true, // ⭐⭐⭐ MUST ADD
  templateUrl: './add.html',
  styleUrl: './add.css',
})
export class Add {
  ngOnInit(): void {
    this.startTimer();
    console.log(this.displayTime);
  }
  ngOnDestroy(): void {
    clearInterval(this.timer);
  }
  Service = inject(Studentcrud);

  AddForm = new FormGroup({
    studentname: new FormControl(''),
    dob: new FormControl(''),
    address: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    country: new FormControl(''),
    contact: new FormControl(),
    email: new FormControl(''),
    cources: new FormControl(''),
    comment: new FormControl(''),
  });

  private cdr = inject(ChangeDetectorRef);
  isSuccess = false;

  Addstudent() {
    console.log(this.AddForm.value);
    const data = { ...this.AddForm.value };

    data.studentname = data.studentname || 'Auto Saved';
    data.contact = data.contact || 1234567890;
    data.address = data.address || 'Not Provided';
    data.city = data.city || 'NA';
    data.state = data.state || 'NA';
    data.country = data.country || 'India';
    data.email = data.email || 'AutoSaved@gmail.com';
    data.cources = data.cources || 'General';
    data.comment = data.comment || 'No Comment';
    data.dob = data.dob || new Date().toISOString();

    this.Service.AddStudentService(data).subscribe({
      next: (res: any) => {
        this.isSuccess = true;
        this.AddForm.reset();
        this.cdr.detectChanges();
      },
      error: (err: any) => {
        console.log(err);
      },
    });

    console.log(data);
  }

  // timing
  timeLeft: number = 12; // 2 minutes = 120 seconds
  displayTime: string = '00:12';
  timer: any;

  startTimer() {
    this.timer = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;

        const minutes = Math.floor(this.timeLeft / 60);
        const seconds = this.timeLeft % 60;

        this.displayTime = `${this.format(minutes)}:${this.format(seconds)}`;
        this.cdr.detectChanges();
      } else {
        clearInterval(this.timer);
        alert('Data Auto Saved Saved ! ');

        // Always call Addstudent, let it fill default values
        this.Addstudent();
      }
    }, 1000);
  }

  format(value: number) {
    return value < 10 ? '0' + value : value;
  }
}
