import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-bike',
  templateUrl: './user-bike.component.html',
  styleUrls: ['./user-bike.component.css']
})
export class UserBikeComponent implements OnInit {
  bikeName:string ;
  constructor() { }

  ngOnInit() {
  }

}
