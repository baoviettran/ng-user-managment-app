import { LoginComponent } from './components/login/login.component';
import { UserAddComponent } from './components/user-add/user-add.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user/:id', component: UserDetailComponent },
  { path: 'add', component: UserAddComponent },
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
