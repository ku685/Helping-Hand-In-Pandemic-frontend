import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Request } from 'src/app/model/request';
import { AuthService } from 'src/app/service/auth.service';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-allrequests',
  templateUrl: './allrequests.component.html',
  styleUrls: ['./allrequests.component.css']
})
export class AllrequestsComponent implements OnInit {

  request:Request[];
  constructor(private route:Router,private authService:AuthService,private requestService: RequestService) { }

  ngOnInit(): void {
    this.getRequests();
  }

  getRequests()
  {
    this.requestService.getRequests().subscribe(data=>{this.request=data;});
  }

}
