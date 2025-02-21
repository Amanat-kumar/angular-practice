import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './users/user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService } from './services/auth-guard.service';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'users', component: UsersComponent, canActivate: [AuthGuardService],
        children: [{path : ':id/:name/user', component: UserComponent}]
    },
    {path: ':id/:name/edit', component: EditUserComponent, canActivate: [AuthGuardService]},
    {path: '**', component: PageNotFoundComponent, canActivate: [AuthGuardService]}
];
