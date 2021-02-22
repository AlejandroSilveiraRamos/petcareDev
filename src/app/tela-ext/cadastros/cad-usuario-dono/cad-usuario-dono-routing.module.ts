import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadUsuarioDonoPage } from './cad-usuario-dono.page';

const routes: Routes = [
  {
    path: '',
    component: CadUsuarioDonoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadUsuarioDonoPageRoutingModule {}
