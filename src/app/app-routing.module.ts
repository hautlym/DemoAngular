import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path:"",loadChildren:()=>import("./main/main.module").then(x=>x.MainModule)},
  {path:"admin", loadChildren:()=>import("./Admin/Admin.module").then(x=>x.AdminModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
