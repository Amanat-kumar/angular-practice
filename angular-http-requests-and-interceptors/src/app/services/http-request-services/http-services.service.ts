import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpServicesService {

  constructor(private http: HttpClient) { }

  onSearch(value:string){
   return  this.http.get('https://dummyjson.com/users/search?q='+value);
  }
}
