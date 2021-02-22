import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadUsuarioCuidadorPage } from './cad-usuario-cuidador.page';

const routes: Routes = [
  {
    path: '',
    component: CadUsuarioCuidadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadUsuarioCuidadorPageRoutingModule {}
