import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SejaCuidadorPage } from './seja-cuidador.page';

const routes: Routes = [
  {
    path: '',
    component: SejaCuidadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SejaCuidadorPageRoutingModule {}
