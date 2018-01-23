import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  users: Observable<any>;
  constructor(private userService: UserService){}
  ngOnInit(){
    this.userService.getUsers(3).subscribe((users:any)=>{
      this.users = users.results;
    });
  }
}
