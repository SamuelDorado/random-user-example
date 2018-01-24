import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  template: `<button [routerLink]="['/users', {outlets: {car: ['car'],bike: null}}]">USer Children Car</button>
             <button [routerLink]="['/users', {outlets: {bike: ['bike'],car: null}}]">USer Children Bike</button><br>
  <a (click)="navigateToUsers()">Go to Users</a> / <a routerLink="policies">Go to Policies</a>
              <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  constructor(private router: Router,private route:ActivatedRoute){
  }
  
  navigateToUsers(){
    this.router.navigate(['./users'],{relativeTo:this.route})
  }
}
