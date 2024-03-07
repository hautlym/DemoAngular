import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './Admin.component';
import {  AdminRoutingModule } from './Admin.routing';
import { CareerComponent } from './Career/Career.component';
import { ContactComponent } from './Contact/Contact.component';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HeaderAdminComponent } from './adminLayout/headerAdmin/headerAdmin.component';
import { FooterAdminComponent } from './adminLayout/footerAdmin/footerAdmin.component';
import { SideBarComponent } from './adminLayout/side-bar/side-bar.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  declarations: [
    AdminComponent,
    HeaderAdminComponent,
    FooterAdminComponent,
    LoginComponent,
    CareerComponent,
    ContactComponent,
    SideBarComponent]
})
export class AdminModule { }
