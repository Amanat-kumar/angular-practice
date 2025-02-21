import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn!:boolean;

  constructor() { }

  logIn(): void{
    this.isLoggedIn=true;
  }

  logOut(): void{
    this.isLoggedIn=false;
  }

  isAuthenticated():boolean{
    if(this.isLoggedIn){
      return true;
    }
    return false;
  }
}
