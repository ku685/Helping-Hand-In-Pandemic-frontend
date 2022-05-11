import { User } from "./user";
import { Volunteer } from "./volunteer";

export class Request {
    requestId:number;
    requestType:string;
    user:User;
    volunteer:Volunteer;
    createdAt:Date;
    acceptedAt:Date;
    remarks:string;
}
