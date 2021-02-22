import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HospedagemPageRoutingModule } from './hospedagem-routing.module';

import { HospedagemPage } from './hospedagem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HospedagemPageRoutingModule
  ],
  declarations: [HospedagemPage]
})
export class HospedagemPageModule {}
