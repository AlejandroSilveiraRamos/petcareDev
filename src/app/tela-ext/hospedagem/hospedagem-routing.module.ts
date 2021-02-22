import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HospedagemPage } from './hospedagem.page';

const routes: Routes = [
  {
    path: '',
    component: HospedagemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HospedagemPageRoutingModule {}
