import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,Event, NavigationStart,NavigationEnd} from '@angular/router';
import 'rxjs/add/operator/filter';



@Component({
  selector: 'app-root',
  template: `<button (click)="navigatToCreate()">Create user</button><br>
             <a (click)="navigateToUsers()">Go to Users</a> / <a routerLink="policies">Go to Policies</a>
             <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private router: Router,private route:ActivatedRoute){
  }
   ngOnInit(){
   }
    navigateToUsers(){
      this.router.navigate(['./users'],{relativeTo:this.route})
    }

    navigatToCreate(){
      this.router.navigate(['/users/create'])
    }
}
