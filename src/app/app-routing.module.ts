import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthAdminGuard } from './auth-admin.guard';
import { AuthGuard } from './auth.guard';
import { AdminViewComponent } from './components/admin-view/admin-view.component';
import { LoginComponent } from './components/login/login.component'
import { UserViewComponent } from './components/user-view/user-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserViewComponent, canActivate: [AuthGuard]},
  { path: 'admin', component: AdminViewComponent, canActivate: [AuthAdminGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
