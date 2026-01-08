import {
  HttpClient,
  HttpErrorResponse,
  HttpEvent,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError, timeout } from 'rxjs';
import { customencoding } from './customencodinghttps';
import { ObjectEncodingOptions, stat } from 'fs';
import { time } from 'console';
import { timeoutProvider } from 'rxjs/internal/scheduler/timeoutProvider';

@Injectable({ providedIn: 'root' })
export class userservice {
  constructor(private http: HttpClient) {}
  private api = 'https://jsonplaceholder.typicode.com/users';

  getuser(): Observable<any> {
    return this.http.get(this.api);
  }

  gtbyid(id: number): Observable<any> {
    return this.http.get(this.api, { params: { id: id } });
    //return this.http.get(`${this.api}\${id}`); //optional
  }

  checkencode(email: any) {
    const params = new HttpParams({ encoder: new customencoding() }).set(`email`, email);
    return this.http.get('https://httpbin.org/get', { params });
  }

  getbyemailEncoded(email: any) {
    const headers = {
      'Made-By': 'Sujal-Gopani',
    };
    const params = new HttpParams({ encoder: new customencoding() }).set(`email`, email);
    return this.http
      .get('https://jsonplaceholder.typicode.com/users', { params, headers })
      .subscribe(console.log);
  }

  getserverresponceevent() {
    const headers = {
      Sujal: 'Angular',
    };
    return this.http.get('https://jsonplaceholder.typicode.com/users?email=Sincere@april.biz', {
      headers,
      observe: 'response',
      reportProgress: true,
      timeout: 2000,
    });
  }

  uploadFile(file: File): Observable<HttpEvent<any>> {
    const formdata = new FormData();
    formdata.append('file', file);
    const uploadapi = 'https://api.escuelajs.co/api/v1/files/upload';

    return this.http.post(uploadapi, formdata, {
      reportProgress: true,
      observe: 'events' as const,
    });
  }

  // error fail then handle
  getdatawitherrorcheck(): Observable<any> {
    return this.http
      .get('https://jsonplaceholder.typicode.com/comments')
      .pipe(timeout(147), retry(2), catchError(this.handleError));
  }

  private handleError(erro: HttpErrorResponse) {
    let msg = 'Something Went Wrong !';
    if (erro.status === 0) {
      msg = 'Network error or Server unreachanble';
    } else {
      msg = 'Server Side Error !';
    }

    return throwError(() => ({
      msg,
      status: erro.status,
    }));
  }
}
