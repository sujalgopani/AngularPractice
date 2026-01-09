import { Component } from '@angular/core';
import { userservice } from '../configservice';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpEventType, httpResource } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-httpreq',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './httpreq.html',
  styleUrl: './httpreq.css',
})
export class Httpreq {
  constructor(private userservice: userservice) {}
  // fetch json by click button
  getalluser() {
    this.userservice.getuser().subscribe((data) => {
      if (!data) console.log(404);
      else console.log(data);
    });
  }

  // fetch json by id
  apiform = new FormGroup({
    uid: new FormControl(),
  });

  getuserbyid() {
    const id = this.apiform.get('uid')?.value;
    return this.userservice.gtbyid(id).subscribe((data) => {
      if (data.length === 0) console.log(404 + ' User Not Found !');
      else console.log(data);
    });
  }

  // for testing and see encoded email or any string
  encodeform = new FormGroup({
    encodeinput: new FormControl(''),
  });

  // PASSED : SUJAL GOPANI+2005 @GMAIL.COM
  // ANGULAR CONSIDER : SUJAL GOPANI%2B2005 %40GMAIL.COM
  demoencode() {
    this.userservice.checkencode(this.encodeform.get('encodeinput')?.value).subscribe((data) => {
      console.log(data);
    });
  }

  // fetch json by encode form email
  getbyemail() {
    this.userservice.getbyemailEncoded(this.encodeform.get('encodeinput')?.value);
    // .subscribe(data=>{
    //   console.log(data)
    // })
  }

  getserverresponse() {
    return this.userservice.getserverresponceevent().subscribe((data) => {
      console.log(data.status);
      console.log(data.body);
      console.log(data.headers);
    });
  }

  // upload file and see the progress
  progresscount = 0;
  progressstatus = '';
  progreeIsVisible = false;

  addfile(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) {
      return;
    }

    const file = input.files[0];
    this.uploadfile(file);
  }

  uploadfile(file: File) {
    this.userservice.uploadFile(file).subscribe((event) => {
      switch (event.type) {
        case HttpEventType.Sent:
          this.progressstatus = 'Upload Loading....!';
          this.progreeIsVisible = true;
          break;

        case HttpEventType.UploadProgress:
          this.progresscount = Math.floor((event.loaded / (event.total ?? 1)) * 100);
          break;

        case HttpEventType.Response:
          this.progressstatus = 'Uploaded Data SuccessFully Done !';
          console.log(event.body);
          this.progreeIsVisible = false;

          break;
      }
    });
  }

  // api response fail
  ngOnInit() {
    this.geterrocheck();
  }

  loading = false;
  errormsg = '';
  edata: string[] = [];
  geterrocheck() {
    this.loading = true;
    this.errormsg = '';

    this.userservice.getdatawitherrorcheck().subscribe({
      next: (data) => {
        this.edata = data;
        this.loading = false;
        console.log(this.edata);
      },
      error: (err) => {
        this.loading = false;
        this.errormsg = err.msg;
      },
    });
  }

  retry() {
    this.geterrocheck();
  }

  // use the httpResource
  Get_User_Using_Resource_From_service() {
    this.userservice.UsingHttpResoservice();
  }

  httpResource_Component = httpResource.text(
    () => 'https://jsonplaceholder.typicode.com/comments/1'
  );
  Get_User_Using_Resource_From_Component() {
    console.log('Data Loaded Succesfully From Component Side !');
    if (this.httpResource_Component.hasValue()) {
      console.log(this.httpResource_Component.value());
    }
  }

  //using zod to parsing or validating api data
  Get_Data_With_Validating_And_Parsing(){
    this.userservice.Parsing_Validating();
  }

}
