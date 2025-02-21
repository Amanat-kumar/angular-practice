import { Component, ContentChild, DoCheck, ElementRef, OnChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements DoCheck{

  @ContentChild('usersTiltleFromApp') usersTiltleFromApp!:ElementRef;

  usersList=['user1', 'user2'];
  constructor(protected userService: UserService){}
  ngDoCheck(): void {
      console.log('local refereance @ContentChild("usersTiltleFromApp")  from main app ng-content :', this.usersTiltleFromApp);
      
  }

  removeUser(userId: number): void{
    this.userService.userListService.splice(userId, 1);
  }

}
