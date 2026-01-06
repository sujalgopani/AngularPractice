import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { question, selfmade, sujalquestion } from './dynamicmodel';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-dynamicforms',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './dynamicforms.html',
  styleUrl: './dynamicforms.css',
})
export class Dynamicforms implements OnInit {
  // form 1 basic
  form!: FormGroup;

  questions: question[] = [
    { key: 'name', label: 'Full Name', type: 'text', required: true },
    { key: 'email', label: 'Email', type: 'email', required: true },
    { key: 'age', label: 'Age', type: 'number', required: false },
  ];

  // intermidiate form login
  sujalform!: FormGroup;
  sujalqu: sujalquestion[] = [
    { key: 'name', label: 'Full Name', type: 'text', required: true },
    { key: 'email', label: 'Email Address', type: 'email', required: true },
    { key: 'experience', label: 'Experience (Years)', type: 'number', required: false },
  ];

  selfmadeForm!: FormGroup;
  selfmadeData: selfmade[] = [
    {
      key: 'fname',
      label: 'First Name',
      type: 'text',
      required: true,
    },
    {
      key: 'age',
      label: 'Age : ',
      type: 'number',
      required: false,
    },
    {
      key: 'city',
      label: 'Select City : ',
      type: 'select',
      selectdata: [
        { skey: '101', svalue: 'Surat' },
        { skey: '102', svalue: 'Bardoli' },
        { skey: '103', svalue: 'Bombay' },
        { skey: '104', svalue: 'Bhavnagar' },
      ],
      required: true,
    },
    {
      key: 'Comment',
      label: 'Comment Here : ',
      type: 'text',
      required: true,
    },
  ];

  ngOnInit(): void {
    //basic
    const group: any = {};
    this.questions.forEach((r) => {
      group[r.key] = new FormControl('', r.required ? Validators.required : []);
    });
    this.form = new FormGroup(group);

    // itermidiate
    const group1: any = {};

    this.sujalqu.forEach((r) => {
      group1[r.key] = new FormControl('', r.required ? Validators.required : []);
    });
    this.sujalform = new FormGroup(group1);

    // self made
    const group2: any = {};

    this.selfmadeData.forEach((res) => {
      group2[res.key] = new FormControl('', res.required ? Validators.required : []);
    });
    this.selfmadeForm = new FormGroup(group2);
  }

  submit() {
    console.log(this.form.value);
  }
  submit1() {
    console.log(this.sujalform.value);
  }
  submit2() {
    console.log(this.selfmadeForm.value);
  }
}
