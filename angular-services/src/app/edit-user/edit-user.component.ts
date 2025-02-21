import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent implements OnInit{

  constructor(private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.urlData();
  }

  urlData(): void{
    this.activatedRoute.params.subscribe((data:Data)=>{
      console.log('URL data using params subscribe:', data);
    })

    let params = this.activatedRoute.snapshot.params;
    console.log('URL data using snapshot params : ',params);
    
  }

}
