import { Component, NgModule } from '@angular/core';
import { BusinessPhilosophyComponent } from './businessPhilosophy/businessPhilosophy.component';
import { Routes, RouterModule } from '@angular/router';
import { BranchComponent } from './Branch/Branch.component';
import { MessageChiefComponent } from './MessageChief/MessageChief.component';
import { HistoryCompanyComponent } from './historyCompany/historyCompany.component';
import { IntroduceComponent } from './introduce.component';

const routes: Routes = [
  {path:"", component: IntroduceComponent,
  children: [
    {
      path: 'businessphilosophi', // child route path
      component: BusinessPhilosophyComponent, // child route component that the router renders
    },
    {
      path: 'branchcompany', // child route path
      component: BranchComponent, // child route component that the router renders
    },
    {
      path: 'messagechief', // child route path
      component: MessageChiefComponent, // child route component that the router renders
    },
    {
      path: 'history', // child route path
      component: HistoryCompanyComponent, // child route component that the router renders
    }
  ]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class IntroduceRoutingModule {

}
