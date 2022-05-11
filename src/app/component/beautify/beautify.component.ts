import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beautify',
  templateUrl: './beautify.component.html',
  styleUrls: ['./beautify.component.css']
})
export class BeautifyComponent implements OnInit {

  type:string=' ';
  roles : string[];username;password;
  constructor() { this.roles=['admin','user','volunteer']}

  ngOnInit(): void {
  }
  login(){}

}
