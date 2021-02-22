import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViagemPageRoutingModule } from './viagem-routing.module';

import { ViagemPage } from './viagem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViagemPageRoutingModule
  ],
  declarations: [ViagemPage]
})
export class ViagemPageModule {}
