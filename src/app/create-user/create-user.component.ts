import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../bean/user';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms/src/model';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  userForm: FormGroup;
  constructor(private userService: UserService,private fb: FormBuilder,private router: Router) {
   }

  ngOnInit() {
    this.userForm = this.fb.group({
      profileImg:[''],
      name:['',Validators.required,Validators.minLength(2)],
      gender:['',Validators.required],
      email:['',Validators.email],
      registered:[new Date()],
      address:this.fb.group({
        direction:['',Validators.required],
        postcode:[28001,Validators.maxLength(5)]
      })
    });

    this.userForm.valueChanges.subscribe((x:any)=>{
      console.log('userForm',x)
    })
    this.userForm.controls.address.valueChanges.subscribe((x:any)=>{
      console.log('address',x);
    })

    this.userForm.get('address').setValue({direction:'C/ De las cortes',postcode:28001});
  }

  onSubmit(){
    console.log(this.userForm)
    console.log("submit")
  }


}
