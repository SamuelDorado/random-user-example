import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(num:number=5){
    return this.http.get(`https://randomuser.me/api/?results=${num}`);
  }

}
