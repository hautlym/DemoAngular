import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { IntroduceComponent } from '../introduce/introduce.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  {path:"", component: MainComponent, children: [
    {path: 'introduce', loadChildren: ()=>import("../introduce/introduce.module").then(x=>x.IntroduceModule) },
    {path:"", component:HomeComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {

}
