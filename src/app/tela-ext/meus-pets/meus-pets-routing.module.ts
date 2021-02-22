import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeusPetsPage } from './meus-pets.page';

const routes: Routes = [
  {
    path: '',
    component: MeusPetsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeusPetsPageRoutingModule {}
