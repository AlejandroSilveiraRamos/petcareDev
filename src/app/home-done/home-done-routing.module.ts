import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeDonePage } from './home-done.page';

const routes: Routes = [
  {
    path: '',
    component: HomeDonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeDonePageRoutingModule {}
