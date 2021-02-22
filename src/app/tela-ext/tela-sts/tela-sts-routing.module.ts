import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaStsPage } from './tela-sts.page';

const routes: Routes = [
  {
    path: '',
    component: TelaStsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaStsPageRoutingModule {}
