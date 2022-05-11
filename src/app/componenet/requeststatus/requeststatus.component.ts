import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Request } from 'src/app/model/request';
import { RequestService } from 'src/app/service/request.service';
@Component({
  selector: 'app-requeststatus',
  templateUrl: './requeststatus.component.html',
  styleUrls: ['./requeststatus.component.css']
})
export class RequeststatusComponent implements OnInit {

  constructor(private router:Router,
              private requestService: RequestService) { }

  request:Request[];
  ngOnInit(): void {
    this.getRequests();
  }

  volunteerDetails(volunteer:any)
  {
    console.log(volunteer);
    this.router.navigate(['volunteer-details',volunteer.volunteerId]);
  }

  getRequests(){
    this.requestService.getRequestById(localStorage.getItem("userId")).subscribe({
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
