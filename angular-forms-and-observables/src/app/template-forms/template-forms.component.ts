import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-forms',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-forms.component.html',
  styleUrl: './template-forms.component.css'
})
export class TemplateFormsComponent {

  @ViewChild('userForm') userForm!:NgForm;
  isAddHobbie=false;

  onFormSubmit():void{
    console.log('userForm : ',this.userForm.value);
    this.userForm.reset();
  }

  addHobbies():void{
    this.isAddHobbie=!this.isAddHobbie;
  }

  fillValues():void{
    this.userForm.form.patchValue({
      name: 'leela',
      gender: 'female',
      userEmail:{email: 'leela@mail.com'}
    });
  }

}
