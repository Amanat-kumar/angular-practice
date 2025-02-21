import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  userListService:string[]=[];

  addUser(user : string) : void{
    this.userListService.push(user);
  }
}
