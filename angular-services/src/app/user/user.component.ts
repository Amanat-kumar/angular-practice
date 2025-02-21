import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {

  @ViewChild('userNameInput') userNameInput!:ElementRef;

  user='';
  constructor(private userService: UserService){}

  addUser(user: string): void{
    console.log('userNameInput : ', this.userNameInput.nativeElement.value);

    // this.userNameInput.nativeElement.value='don2'; // not recommended user property binding

    // console.log('userNameInput 2 : ', this.userNameInput.nativeElement.value);

    this.userService.userListService.push(user);
  }

}
