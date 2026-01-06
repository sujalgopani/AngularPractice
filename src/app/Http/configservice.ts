import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class userservice {
  constructor(private http: HttpClient) {}

  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  getUsers(sid : number): Observable<any> {
    return this.http.get(this.apiUrl,{params:{id:sid}});
  }
}
