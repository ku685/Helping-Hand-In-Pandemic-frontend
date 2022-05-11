import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from '../model/request';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  userloginUrl:string='';
  usersignUpUrl:string='';

  volunteerloginUrl:string='';
  volunteersignUpUrl:string='';

  adminloginUrl:string='';

  createRequestUrl:string='';

  volunteerbyIdurl:string;

  getRequestUrl: string = '';
  acceptRequestUrl:string=' ';

  enableUrl:string='';
  disableUrl:string='';
  enableVolUrl:string='';
  disableVolUrl:string='';
  constructor(private http:HttpClient) { 
    this.usersignUpUrl="http://localhost:8090/user/register";
    this.userloginUrl="http://localhost:8090/user/login";
    this.volunteerloginUrl="http://localhost:8090/volunteer/login";
    this.volunteersignUpUrl="http://localhost:8090/volunteer/register";
    this.adminloginUrl="http://localhost:8090/admin/login";
    this.createRequestUrl="http://localhost:8090/request/add";
    this.volunteerbyIdurl="http://localhost:8090/volunteer";
    this.getRequestUrl = 'http://localhost:8090/request';
    this.acceptRequestUrl='http://localhost:8090/request/accept';
    this.enableUrl='http://localhost:8090/user/enable';
    this.disableUrl='http://localhost:8090/user/disable'
    this.enableVolUrl='http://localhost:8090/volunteer/enable';
    this.disableVolUrl='http://localhost:8090/volunteer/disable'
  }

  public getRequestById(id: any){
    return this.http.get(`${this.getRequestUrl}/${id}`);
  }

  public getRequests():Observable<any>{
    return this.http.get(`${this.getRequestUrl}`);
  }


  public acceptRequest(id:any,request:any):Observable<any>{
    return this.http.put(`${this.acceptRequestUrl}/${id}`,request);
  }


  public DisableUser(id:any,body:null):Observable<any>{
    return this.http.put(`${this.disableUrl}/${id}`,body);
  }
  public EnableUser(id:any,body:null):Observable<any>{
    return this.http.put(`${this.enableUrl}/${id}`,body);
  }

  public DisableVolunteer(id:any,body:null):Observable<any>{
    return this.http.put(`${this.disableVolUrl}/${id}`,body);
  }
  public EnableVolunteer(id:any,body:null):Observable<any>{
    return this.http.put(`${this.enableVolUrl}/${id}`,body);}
  

}
