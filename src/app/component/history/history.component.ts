import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Request } from 'src/app/model/request';
import { AuthService } from 'src/app/service/auth.service';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  request:Request[];
  searchText;
    x= Number(localStorage.getItem("volunteerId"));
  constructor(private route:Router,private authService:AuthService,private requestService: RequestService) { }

  ngOnInit(): void {
    this.getRequests();
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



