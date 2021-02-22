import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContrateServicoPageRoutingModule } from './contrate-servico-routing.module';

import { ContrateServicoPage } from './contrate-servico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContrateServicoPageRoutingModule
  ],
  declarations: [ContrateServicoPage]
})
export class ContrateServicoPageModule {}
