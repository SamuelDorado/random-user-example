import { Component, OnInit,HostListener,HostBinding,Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  @Input() profileImg:string;
  @Input() name:any;
  @Input() gender:string;
  @Input() email:string;
  @Input() registered: Date;
  constructor() {
  }
}
