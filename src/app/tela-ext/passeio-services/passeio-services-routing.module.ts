import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasseioServicesPage } from './passeio-services.page';

const routes: Routes = [
  {
    path: '',
    component: PasseioServicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasseioServicesPageRoutingModule {}
