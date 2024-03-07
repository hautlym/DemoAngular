import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './AdminHome/AdminHome.component';
import { CareerComponent } from './Career/Career.component';
import { ContactComponent } from './Contact/Contact.component';
import { AdminComponent } from './Admin.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'home', component: AdminHomeComponent },
      { path: 'career', component: CareerComponent },
      { path: 'contact', component: ContactComponent },
      { path: '', component: AdminHomeComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
