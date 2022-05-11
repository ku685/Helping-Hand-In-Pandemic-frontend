import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { Volunteer } from 'src/app/model/volunteer';
import { AuthService } from 'src/app/service/auth.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  name :string='';
  username:string='';
  email:string;
  password:string='';
  mobile:number;
  gender:string;
  city:string;
  address:string;
  state:string;
  pincode:number;
  age:number;

  type:string=' ';
  roles : string[];

  user:User = new User();
  volunteer:Volunteer=new Volunteer();

  constructor(private authService:AuthService,private route:Router) { 
    this.roles=['user','volunteer']
  }

  


  ngOnInit(): void {
    this.name='';
    this.username='';
    this.email='';
    this.password='';
    this.address='';
    this.city='';
    this.state='';
    this.gender='';
  }

  login()
  {
    this.route.navigate(['/']);
  }
  signup()
  {
  
if(this.type=='user'){

    this.user.fullName=this.name;
    this.user.userName=this.username;
    this.user.email=this.email;
    this.user.passWord=this.password;
    this.user.mobile=this.mobile;
    
    this.user.address=this.address;
    this.user.city=this.city;
    this.user.state=this.state
    this.user.pincode=this.pincode;
    this.user.gender=this.gender;
    this.user.age=this.age;
    this.user.status='enable';

    this.authService.signUp(this.user).subscribe(res=>{
      if(res==null){
      alert("registration failed");
      this.ngOnInit();}
      else{
        console.log("Registration is successful");
        this.route.navigate(['/']);

      }
    },err=>{
      alert("Registration failed");
      this.ngOnInit();
    })
  }
  
 
if(this.type=='volunteer')
  {
    this.volunteer.fullName=this.name;
    this.volunteer.userName=this.username;
    this.volunteer.email=this.email;
    this.volunteer.passWord=this.password;
    this.volunteer.mobile=this.mobile;
    
    this.volunteer.address=this.address;
    this.volunteer.city=this.city;
    this.volunteer.state=this.state
    this.volunteer.pincode=this.pincode;
    this.volunteer.gender=this.gender;
    this.volunteer.age=this.age;
    this.volunteer.status='enable';

    this.authService.signUpvolunteer(this.volunteer).subscribe(res=>{
      if(res==null){
      alert("registration failed");
      this.ngOnInit();}
      else{
        console.log("Registration is successful");
        this.route.navigate(['/']);

      }
    },err=>{
      alert("Registration failed");
      this.ngOnInit();
    })
  }

}
}
