import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadUsuarioDonoPageRoutingModule } from './cad-usuario-dono-routing.module';

import { CadUsuarioDonoPage } from './cad-usuario-dono.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadUsuarioDonoPageRoutingModule
  ],
  declarations: [CadUsuarioDonoPage]
})
export class CadUsuarioDonoPageModule {}
