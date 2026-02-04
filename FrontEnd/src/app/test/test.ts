import { Component, OnInit, OnDestroy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.html',
  styleUrl: './test.css',
})
export class Test implements OnInit, OnDestroy {
  timeleft: number = 10;
  displaytime: string = '00:10';
  timer: any;
  isSubmitted = false; // prevent multiple submits
  private cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.starttimer();

    document.addEventListener('visibilitychange', this.handleTabSwitch); // if the user change tab or switch then call me immediatlly // if the user chaneg & switch tab then handleTabSwitch call
  }

  ngOnDestroy() {
    clearInterval(this.timer);

    // VERY IMPORTANT 🔥
    document.removeEventListener('visibilitychange', this.handleTabSwitch);
  }

  // ✅ TAB SWITCH FUNCTION
  handleTabSwitch = () => {
    if (document.hidden && !this.isSubmitted) {
      alert('Tab switched! Auto submitting exam.');

      this.autoSubmit();
    }
  };


  starttimer() {
    this.timer = setInterval(() => {
      if (this.timeleft > 0) {
        this.timeleft--;

        const minute = Math.floor(this.timeleft / 60);
        const second = this.timeleft % 60;

        this.displaytime = `${this.formattime(minute)}:${this.formattime(second)}`;
        this.cdr.detectChanges();
      } else {
        clearInterval(this.timer);

        alert('Time Out ⏰');

        this.autoSubmit();
      }
    }, 1000);
  }

  formattime(value: number) {
    return value < 10 ? '0' + value : value;
  }

  // ✅ AUTO SUBMIT
  autoSubmit() {
    if (this.isSubmitted) return;

    this.isSubmitted = true;

    clearInterval(this.timer);

    console.log('Form Auto Submitted 🚀');

    // 👉 CALL YOUR API HERE
    // this.examService.submit(data).subscribe()
  }
}
