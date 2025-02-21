import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-topic-obervables',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topic-obervables.component.html',
  styleUrl: './topic-obervables.component.css'
})
export class TopicObervablesComponent implements OnInit, OnDestroy{

  observableValues:string[]=[];
   myObervable = new Observable(observer=>{
    observer.next('leela');
    observer.next('rama');
    observer.complete();
   });

   myObservable2= new Observable(observer=>{
    let count=0;
    setInterval(() => {
      observer.next(count);
      count++
    }, 1000);
   });

   valuesOfMyObservable2:number[]=[];

   obMyObservable2:any;

   ngOnInit(): void {
       this.myObervable.subscribe((data)=>{
        console.log('myObervable value : ',data);
        this.observableValues.push(<string>data);
        console.log('observableValue value : ',data);
       })
       this.obMyObservable2=this.myObservable2.subscribe(data=>{
        this.valuesOfMyObservable2.push(<number>data);
        console.log('myObservable2 value :',data);
        
       })
   }

   ngOnDestroy(): void {
       this.obMyObservable2.unsubscribe();
   }



}
