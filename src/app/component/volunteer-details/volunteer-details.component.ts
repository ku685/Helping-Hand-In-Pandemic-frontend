import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Volunteer } from 'src/app/model/volunteer';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-volunteer-details',
  templateUrl: './volunteer-details.component.html',
  styleUrls: ['./volunteer-details.component.css']
})
export class VolunteerDetailsComponent implements OnInit {


  id:number
  volunteer:Volunteer
  constructor(private route:ActivatedRoute,private authService:AuthService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.volunteer=new Volunteer();
    this.authService.getVolunteerById(this.id).subscribe(data=>{
      this.volunteer=data;
      console.log(this.volunteer);
    });
  }

}
