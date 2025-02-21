import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{

  user!:{
    id:number,
    name: string;
  };

  queryParams!:string;
  fragment!:string;

  constructor(private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((data:Data)=>{
      console.log("user :", data);
      this.user = {
        id: data['id'],
        name: data['name']
      }
    })
    this.activatedRoute.queryParams.subscribe((data:Data)=>{
      console.log("queryParams :", data);
      this.queryParams=data['search'];
    })

    this.activatedRoute.fragment.subscribe((data)=>{
      console.log("fragment :", data);
      this.fragment=data+'';
    })


      
  }



}
