import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SejaHeroiPage } from './seja-heroi.page';

const routes: Routes = [
  {
    path: '',
    component: SejaHeroiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SejaHeroiPageRoutingModule {}
