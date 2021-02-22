import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadUsuarioCuidadorPageRoutingModule } from './cad-usuario-cuidador-routing.module';

import { CadUsuarioCuidadorPage } from './cad-usuario-cuidador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadUsuarioCuidadorPageRoutingModule
  ],
  declarations: [CadUsuarioCuidadorPage]
})
export class CadUsuarioCuidadorPageModule {}
