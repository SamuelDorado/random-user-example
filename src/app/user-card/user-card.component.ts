import { Component, OnInit,HostListener,HostBinding,Input } from '@angular/core';
import { User } from '../bean/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  @Input() user:User;
  constructor() {
  }
}
