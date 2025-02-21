import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ShortenStringPipe } from '../pipes/shorten-string.pipe';
import { HttpServicesService } from '../services/http-request-services/http-services.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule, CommonModule, ShortenStringPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  users:any;
  errors:any;

  pagination!:{
    limit:number;
    skip:number;
    total:number;
  }

  constructor(private http:HttpClient, private httpServicesService: HttpServicesService){}

  ngOnInit(): void {
   this.http.get('https://dummyjson.com/users').subscribe((response:any)=>{
      console.log('get response from url : ', response);
      this.users=response.users;
      this.pagination={
        limit: response.limit,
        skip: response.skip,
        total: response.total
      }
    })
  }

  onSearch(event:Event){
    let search=(event.target as HTMLInputElement).value;
    console.log("onSearch :", search);
    this.httpServicesService.onSearch(search).subscribe((response:any)=>{
      console.log('onSearch result : ',response.users);
      this.users=response.users;
      this.pagination={
        limit: response.limit,
        skip: response.skip,
        total: response.total
      }
    }, (error:any)=>{
      console.log('onSearch error : ',error );
      
    })
  }

}
