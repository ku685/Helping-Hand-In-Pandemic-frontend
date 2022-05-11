import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {


  user:User[];
  
  constructor(private route:Router,private authService:AuthService,private requestService: RequestService) { }

  ngOnInit(): void {
    this.getUsers();

  }

private getUsers(){
  this.authService.getUserList()
    .subscribe(data => {this.user = data;
    });



}

      enableUser(id:any)
        {
        
          console.log(id);
         
          // console.log(this.user[id].status);
          // this.user[id].status="enable";
          //this.request1.updatedAt=new Date(Date.now());
          // console.log(this.request1.volunteer_id);
          this.requestService.EnableUser(id,null).subscribe({
            next: (response: any) => {
              //  this.user[id] = response;
              console.log(response);
            },
            error: (error: any) => {
              console.log(error);
            }
          });
      
      
          
        }


disableUser(id:any)
  {
          // this.enable="disable";
          console.log(id);
          
          // console.log(this.user[id-1]);
          // this.user[id].status="disable";
          
          this.requestService.DisableUser(id,null).subscribe({
            next: (response: any) => {
              //  this.user = response;
              console.log(response);
            },
            error: (error: any) => {
              console.log(error);
            }
          });
        }

  

   }
