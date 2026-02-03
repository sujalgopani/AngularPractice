import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Studentcrud {
  constructor(private http: HttpClient) {}

  GetAllStudent() {
    return this.http.get<any>('https://localhost:44309/api/MainCrud');
  }
}
