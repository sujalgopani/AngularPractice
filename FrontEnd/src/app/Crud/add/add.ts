import { Component, inject, ChangeDetectorRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Studentcrud } from '../Service/studentcrud';
import { serverRoutes } from '../../app.routes.server';

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
    // document.addEventListener('visibilitychange',this.handleChnageOrSwitch); // if the user change tab or switch then call me immediatlly // if the user chaneg & switch tab then handleTabSwitch call
  }
  ngOnDestroy(): void {
    clearInterval(this.timer);
    // document.removeEventListener('visibilitychange',this.handleChnageOrSwitch);
  }
  Service = inject(Studentcrud);

  AddForm = new FormGroup({
    studentname: new FormControl('',[Validators.required,Validators.minLength(3)]),
    dob: new FormControl('',Validators.required),
    address: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    contact: new FormControl<number | null>(null,[Validators.required,Validators.pattern("^[0-9]{10}$")]),
    email: new FormControl('',[Validators.required,Validators.email]),
    cources: new FormControl('', Validators.required),
    comment: new FormControl(''),
  });

  private cdr = inject(ChangeDetectorRef);
  isSuccess = false;
  Isloading = false;

  Addstudent() {
    this.Isloading = true;
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
        this.Isloading = false;
        this.AddForm.reset();
        this.cdr.detectChanges();
      },
      error: (err: any) => {
        console.log(err);
      },
    });

    console.log(data);
  }

  // timing submit
  timeLeft: number = 1000; // 2 minutes = 120 seconds
  displayTime: string = '17:00';
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


  // handleChnageOrSwitch=()=>{
  //   if(document.hidden && !this.isSuccess){
  //     alert("You Tab Change OR Switch So Data Is Auto Save !");
  //     this.Addstudent();
  //   }
  // }


}
