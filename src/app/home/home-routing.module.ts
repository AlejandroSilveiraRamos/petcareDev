import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'cad-usuario-dono',
    loadChildren: () => import('./../tela-ext/cadastros/cad-usuario-dono/cad-usuario-dono.module').then( m => m.CadUsuarioDonoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
