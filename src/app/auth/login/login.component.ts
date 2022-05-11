import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/model/admin';
import { User } from 'src/app/model/user';
import { Volunteer } from 'src/app/model/volunteer';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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

  user:User =new User();
  volunteer:Volunteer= new Volunteer();
  admin:Admin=new Admin();

  constructor(private authService:AuthService,private route:Router) {
    this.roles=['admin','user','volunteer']
   }

  ngOnInit(): void {
    this.username='';
    this.password='';
  }


  signup()
  {
    this.route.navigate(['/signup']);
  }
  login(){

    if(this.type=='user')
    {
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
   
   this.authService.loginuser(this.user).subscribe(res=>{
      if(res==null)
      {
        alert("username or password is wrong");
        this.ngOnInit();

      }else{
        console.log("Login successful");
        
        localStorage.setItem("userId",res.userId);
        if(this.type=='user'){
          this.route.navigate(['/user']);
        }
        if(this.type=='admin'){
          this.route.navigate(['/admin']);
        }
       
      }
   },err=>{
     alert("Login failed");
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

this.authService.loginvolunteer(this.volunteer).subscribe(res=>{
  if(res==null)
  {
    alert("username or password is wrong");
    this.ngOnInit();

  }else{
    console.log("Login successful");
    localStorage.setItem("volunteerId",res.volunteerId);
    console.log("volunteerID=");
    console.log(localStorage.getItem("volunteerId"));
    localStorage.setItem("token",res.token);
    
    if(this.type=='volunteer'){
      this.route.navigate(['/volunteer']);
    }
  }
},err=>{
 alert("Login failed");
 this.ngOnInit();
})
}

if(this.type=='admin')
{

this.admin.userName=this.username;
this.admin.passWord=this.password;


this.authService.loginadmin(this.admin).subscribe(res=>{
  if(res==null)
  {
    alert("username or password is wrong");
    this.ngOnInit();

  }else{
    console.log("Login successful");
   // localStorage.setItem("token",res.token);
    
    if(this.type=='admin'){
      this.route.navigate(['/admin']);
    }
  }
},err=>{
 alert("Login failed");
 this.ngOnInit();
})
}

}






}
