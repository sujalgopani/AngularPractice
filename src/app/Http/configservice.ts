import { stat } from 'fs';
import {
  HttpClient,
  HttpErrorResponse,
  HttpEvent,
  HttpEventType,
  HttpHandlerFn,
  HttpParams,
  HttpRequest,
  httpResource,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, tap, throwError, timeout } from 'rxjs';
import { customencoding } from './customencodinghttps';
import { email, z } from 'zod';

export const Comment_Parsing_Validation = z.object({
  id: z.number(),
  name: z.string().transform((val)=>val.slice(0,4)+" XXX..."),
  body: z.string(),
});


@Injectable({ providedIn: 'root' })
export class userservice {
  constructor(private http: HttpClient) {}
  private api = 'https://jsonplaceholder.typicode.com/users/as';

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

  // use the httpResource
  user = httpResource.text(() => ({
    url: `https://jsonplaceholder.typicode.com/comments/1`,
    method: 'Get',
    headers: {
      'First-Time': 'Sujal-Gopani',
    },
    timeout: 1200,
  }));

  UsingHttpResoservice() {
    this.user;
    if (this.user.value()) {
      console.log('Data Fetched SucessFully From Service File Using httpResource !');
    }
    if (this.user.hasValue()) {
      console.log(this.user.value());
    }
  }

  commentApi = httpResource(() => `https://jsonplaceholder.typicode.com/comments/1`, {
    parse: Comment_Parsing_Validation.parse,
  });

  Parsing_Validating() {
    if (this.commentApi.hasValue()) {
      console.log('Parsed Comment:', this.commentApi.value());
    }
    console.log('200 OK');
  }


}

export function loggingInterceptor(
    req:HttpRequest<unknown>,
    next:HttpHandlerFn,
  ):Observable<HttpEvent<unknown>>{
     return next(req).pipe(
      tap((eve)=>{
        if(eve.type === HttpEventType.Response){
          console.log(req.url, ' returned a response with status ',eve.status)
        }
      })
    )
  }
