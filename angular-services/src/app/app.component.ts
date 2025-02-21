import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from "./user/user.component";
import { UsersComponent } from './users/users.component';
import { ChangeColorDirective } from './custom-directives/change-color.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent, UsersComponent, ChangeColorDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'angular-hooks-services';
}
