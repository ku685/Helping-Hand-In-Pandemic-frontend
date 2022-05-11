import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Request } from 'src/app/model/request';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';
import { RequestService } from 'src/app/service/request.service';


@Component({
  selector: 'app-volunteer-dashboard',
  templateUrl: './volunteer-dashboard.component.html',
  styleUrls: ['./volunteer-dashboard.component.css']
})
export class VolunteerDashboardComponent implements OnInit {

  constructor(private route:Router,private authService:AuthService,private requestService: RequestService) { }

  request:Request[];
  searchText;
  //user:User[];
  
  request1 = {
    
    
    requestType:'',
  
    updatedAt:'',
    volunteer_id:''

  }

  vId:any;
  

  ngOnInit(): void {
    this.getRequests();
  }
  logout()
  {
    localStorage.removeItem("volunteerId");
    this.route.navigate(['/']);
  }


  
  acceptRequest(id:any)
  {
    console.log(id);
    console.log(localStorage.getItem("volunteerId"));
    console.log(this.request[id-1].user.fullName);
    this.request1.volunteer_id=localStorage.getItem("volunteerId");
    console.log(this.request1.volunteer_id);


    this.vId=localStorage.getItem("volunteerId");
    console.log(this.vId);
    this.authService.getVolunteerById(this.vId).subscribe(data=>{
      if(data==null){
        alert("some error occur");
      }
      else{
        if(data.status=='disable')
        {
          alert("You have been temporarily blocked for further accepting request");
        }
        else{
          this.requestService.acceptRequest(id, this.request1).subscribe({
            next: (response: any) => {
              this.request = response;
              console.log(response);
              this.route.navigate(['/history']);
            },
            error: (error: any) => {
              console.log(error);
            }
          })
        }
      }
    })

    // this.requestService.acceptRequest(id, this.request1).subscribe({
    //   next: (response: any) => {
    //     this.request = response;
    //     console.log(response);
    //   },
    //   error: (error: any) => {
    //     console.log(error);
    //   }
    // })


  
  }



    


  getRequests()
  {
    this.requestService.getRequests().subscribe({
      next: (response: any) => {
        this.request = response;
        console.log(response);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
    
  }



