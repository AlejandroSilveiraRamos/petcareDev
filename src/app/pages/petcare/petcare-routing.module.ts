import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetcarePage } from './petcare.page';

const routes: Routes = [
  {
    path: '',
    component: PetcarePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetcarePageRoutingModule {}
