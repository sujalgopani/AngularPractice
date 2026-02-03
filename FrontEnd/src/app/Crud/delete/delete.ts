import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Studentcrud } from '../Service/studentcrud';

@Component({
  selector: 'app-delete',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './delete.html',
  styleUrl: './delete.css',
})
export class Delete {
  service = inject(Studentcrud);
  private cdr = inject(ChangeDetectorRef);
  Searchbar = new FormGroup({
    Sid: new FormControl(),
  });

  IsSearched = false;
  DeleteList: any = null;

  SerachBtn() {
    const StudentId = this.Searchbar.get('Sid')?.value;
    this.service.GetStudentById(StudentId).subscribe({
      next: (res: any) => {
        console.log('done');
        this.DeleteList = res;
        this.IsSearched = true;
        this.cdr.detectChanges();
      },
      error: (err: any) => {
        console.log('err');
        this.IsSearched = false;
      },
    });
  }

  DeleteButton(Sid: number) {
    const Isdelete = confirm('Are You Sure Delete !');

    if (Isdelete) {
      const StudentId = this.Searchbar.get('Sid')?.value;
      this.service.DeleteStudent(StudentId).subscribe({
        next: (res: any) => {
          console.log('Delete !');
          this.DeleteList = null;
          this.cdr.detectChanges();
        },
        error: (err: any) => {
          console.log('ERR');
        },
      });
    } else {
      console.log('Not');
    }
  }
}
