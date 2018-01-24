import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/first';
import { UserService } from '../services/user.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  subscription: Subscription;
  users: Observable<any>;
  constructor(private userService: UserService){}
  ngOnInit(){
    this.subscription = this.userService.getUsers().first().subscribe((users:any)=>{
      this.users = users;
    });
  }
  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
}
