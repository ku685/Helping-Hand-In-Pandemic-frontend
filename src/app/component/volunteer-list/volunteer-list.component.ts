import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Volunteer } from 'src/app/model/volunteer';
import { AuthService } from 'src/app/service/auth.service';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-volunteer-list',
  templateUrl: './volunteer-list.component.html',
  styleUrls: ['./volunteer-list.component.css']
})
export class VolunteerListComponent implements OnInit {

  volunteer:Volunteer[];
  constructor(private route:Router,private authService:AuthService,private requestService: RequestService) { }

  ngOnInit(): void {
    this.getVolunteers();
  }



  private getVolunteers(){
    this.authService.getVolunteerList()
      .subscribe(data => {this.volunteer = data;
      });
  }
    
    enableVolunteer(id:any)
    {
      console.log(id);
         
      
      this.requestService.EnableVolunteer(id,null).subscribe({
        next: (response: any) => {
          //  this.user[id] = response;
          console.log(response);
        },
        error: (error: any) => {
          console.log(error);
        }
      });
    }
    disableVolunteer(id:any)
    {
      console.log(id);
      
      this.requestService.DisableVolunteer(id,null).subscribe({
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
