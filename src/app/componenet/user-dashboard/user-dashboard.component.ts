import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Request } from 'src/app/model/request';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

helptype:string='';
remarks1:string='';
user:User[];
res1:any;
id1:any;
request = {
  requestType : '',
  user_id : '',
  remarks:''
}

  constructor(private route:Router,private authService:AuthService) { }

  ngOnInit(): void {
  }

  logout()
  {
    localStorage.removeItem("userId");
    this.route.navigate(['/']);
  }

  requests()
  {
    
    this.request.requestType = this.helptype;
    this.request.user_id = localStorage.getItem("userId");
    this.request.remarks = this.remarks1;
    this.id1=localStorage.getItem("userId");
    console.log(localStorage.getItem("userId"));
    // if(this.user[0].status==='enable')
    // {
     this.authService.getUserById(this.id1).subscribe(data=>{
       if(data==null){
        alert("Request not created");
        this.ngOnInit();}
        else{
            if(data.status=='disable')
            {
              alert("Your account has been blocked from creating request");
            }
            else{
                this.authService.createRequest(this.request).subscribe(res=>{
      if(res==null){
      alert("Request not created");
      this.ngOnInit();}
      else{
        console.log("Request Created");
        this.route.navigate(['requeststatus']);

      }
    },err=>{
      alert("REQUEST NOT GENERATED");
      this.ngOnInit();
    })
            }
        }
     })


    // this.authService.createRequest(this.request).subscribe(res=>{
    //   if(res==null){
    //   alert("Request not created");
    //   this.ngOnInit();}
    //   else{
    //     console.log("Request Created");
    //     this.route.navigate(['requeststatus']);

    //   }
    // },err=>{
    //   alert("REQUEST NOT GENERATED");
    //   this.ngOnInit();
    // })
  // }
  // else{
  //   alert("You have been blocked from taking help ");
  // }
    
  }

   
}


