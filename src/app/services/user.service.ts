import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../bean/user';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(num:number=5){
    return this.http.get(`http://localhost:3000/users`);
  }
  createUser(user:User){
    return this.http.post(`http://localhost:3000/users`,user);
  }
}
