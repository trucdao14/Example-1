import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent} from './components/home/home.component';
import { AddComponent } from './components/add/add.component';
import { AppGuard } from '../app/services/guards/app.guard';
import { AuthGuard } from '../app/services/guards/auth.guard';

const routes: Routes = [
  {
    path: '', component: HomeComponent, canActivate: [AppGuard]
  },
  {
    path: 'login', component: LoginComponent, canActivate: [AuthGuard]
  },
  {
    path: 'sign-in', component: SigninComponent, canActivate: [AuthGuard]
  },
  {
    path: 'add', component: AddComponent, canActivate: [AppGuard]
  },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
