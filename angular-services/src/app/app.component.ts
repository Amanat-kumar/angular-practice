import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LoginService } from './services/login.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-routers';

  constructor(private route: Router, private activatedRoute: ActivatedRoute,
    protected logInService: LoginService
  ){}

  goToUserComponent():void{
    // this.route.navigateByUrl('/users');
    this.route.navigate(['/users']);
  }
  
  logIn():void{
    this.logInService.logIn();
  }

  logOut():void{
    this.logInService.logOut();
    this.route.navigate(['']);
  }

}
