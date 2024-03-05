import { HistoryCompanyComponent } from './historyCompany/historyCompany.component';
import { MessageChiefComponent } from './MessageChief/MessageChief.component';
import { BusinessPhilosophyComponent } from './businessPhilosophy/businessPhilosophy.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroduceComponent } from './introduce.component';
import { RouterModule } from '@angular/router';
import { BranchComponent } from './Branch/Branch.component';
import { IntroduceRoutingModule } from './introduce.routing';

@NgModule({
  imports: [
    CommonModule,
    IntroduceRoutingModule
    // RouterModule.forChild(Introduceroutes)
  ],
  declarations: [
    IntroduceComponent,
    BranchComponent,
    BusinessPhilosophyComponent,
    MessageChiefComponent,
    HistoryCompanyComponent
  ]
})
export class IntroduceModule { }
