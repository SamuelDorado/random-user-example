import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(num:number=5){
    return this.http.get(`https://randomuser.me/api/?results=${num}`);
  }
  getBooks(){
    return this.http.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699`)
  }
}
