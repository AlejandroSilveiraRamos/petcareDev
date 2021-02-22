import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HospedagemServicesPage } from './hospedagem-services.page';

const routes: Routes = [
  {
    path: '',
    component: HospedagemServicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HospedagemServicesPageRoutingModule {}
