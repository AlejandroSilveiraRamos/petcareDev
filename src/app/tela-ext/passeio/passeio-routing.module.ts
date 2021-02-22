import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasseioPage } from './passeio.page';

const routes: Routes = [
  {
    path: '',
    component: PasseioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasseioPageRoutingModule {}
