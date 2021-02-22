import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContrateServicoPage } from './contrate-servico.page';

const routes: Routes = [
  {
    path: '',
    component: ContrateServicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContrateServicoPageRoutingModule {}
