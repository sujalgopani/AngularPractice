import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Studentcrud {
  constructor(private http: HttpClient) {}

  GetAllStudentService() {
    return this.http.get<any>('https://localhost:44309/api/MainCrud/GetAllStudent');
  }

  AddStudentService(Students: any) {
    return this.http.post<any>('https://localhost:44309/api/MainCrud/AddStudent', Students);
  }

  GetStudentById(id: number) {
    return this.http.get<any>(`https://localhost:44309/api/MainCrud/GetById?id=${id}`);
  }

  UpdateStudent(StudetnId: number, Students: any) {
    return this.http.put<any>(
      `https://localhost:44309/api/MainCrud/UpdateStudent/${StudetnId}`,
      Students,
    );
  }

  DeleteStudent(StudentId: number) {
    return this.http.delete<any>(`https://localhost:44309/api/MainCrud/DeleteStudent/${StudentId}`);
  }

  SendEmailToStudent(MailComponent: any) {
    return this.http.post<any>(
      'https://localhost:44309/api/MainCrud/SendEmail/Send',
      MailComponent,
    );
  }

  LoginAndroleCheck(LoginData: any) {
    return this.http.post<any>(
      'https://localhost:44309/api/MainCrud/LoginAndroleCheck/Login',
      LoginData,
    );
  }

  GenerateToken(){
    return  this.http.get<any>("https://localhost:44309/api/MainCrud/Gettoken/GetToken");
  }
}
