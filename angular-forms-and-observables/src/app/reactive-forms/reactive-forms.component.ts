import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css',
})
export class ReactiveFormsComponent implements OnInit{

  userForm!:FormGroup;
  // hobbies:string[]=[];

  genders:string[]=['male', 'female'];

  ngOnInit(): void {
      this.userForm = new FormGroup({
        'name' : new FormControl(null,Validators.required),
        'gender' : new FormControl('female'),
        'userEmail' : new FormGroup({
          'email' : new FormControl(null, [Validators.required, Validators.email])
        }),
        'hobbies': new FormArray([])
      })

      console.log('ngOnInit userFrom : ', this.userForm);
      
  }

  onFormSubmit():void{
    console.log('userForm Object : ', this.userForm);
    this.userForm.reset();
  }

  fillUserFromValues():void{
    this.userForm.patchValue({
      name: 'leela',
      gender: 'male',
      userEmail:{email: 'leela@mail.com'}
    });
  }

  get hobbies(){
    return this.userForm.get('hobbies')
  }

}
