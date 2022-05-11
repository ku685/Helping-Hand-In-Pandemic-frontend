import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../model/admin';
import { User } from '../model/user';
import { Volunteer } from '../model/volunteer';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userloginUrl:string='';
  usersignUpUrl:string='';

  volunteerloginUrl:string='';
  volunteersignUpUrl:string='';

  adminloginUrl:string='';

  createRequestUrl:string='';

  volunteerbyIdurl:string;

  userListUrl:string;
  
  volunteerListUrl:string;
  constructor(private http:HttpClient) {
    this.usersignUpUrl="http://localhost:8090/user/register";
    this.userloginUrl="http://localhost:8090/user/login";
    this.volunteerloginUrl="http://localhost:8090/volunteer/login";
    this.volunteersignUpUrl="http://localhost:8090/volunteer/register";
    this.adminloginUrl="http://localhost:8090/admin/login";
    this.createRequestUrl="http://localhost:8090/request/add";
    this.volunteerbyIdurl="http://localhost:8090/volunteer";
    this.userListUrl="http://localhost:8090/user";
    this.volunteerListUrl="http://localhost:8090/volunteer";
   }

   loginuser(user:User):Observable<any>{
     return this.http.post<any>(this.userloginUrl,user);
   }

   signUp(user:User):Observable<any>{
     return this.http.post<any>(this.usersignUpUrl,user);
   }

   signUpvolunteer(volunteer:Volunteer):Observable<any>{
    return this.http.post<any>(this.volunteersignUpUrl,volunteer);
  }
  loginvolunteer(volunteer:Volunteer):Observable<any>{
    return this.http.post<any>(this.volunteerloginUrl,volunteer);
  }

  loginadmin(admin:Admin):Observable<any>{
    return this.http.post<any>(this.adminloginUrl,admin);}


    createRequest(request:any):Observable<any>{
      return this.http.post<any>(this.createRequestUrl,request);
    }

    getVolunteerById(id:any): Observable<Volunteer>{
      return this.http.get<any>(`http://localhost:8090/volunteer/${id}`);
    }

    getUserById(id:number): Observable<User>{
      return this.http.get<any>(`http://localhost:8090/user/${id}`);
    }


    getUserList():Observable<any>{
      return this.http.get<any>(this.userListUrl);
    }

    getVolunteerList():Observable<any>{
      return this.http.get<any>(this.volunteerListUrl);
    }

    



}
