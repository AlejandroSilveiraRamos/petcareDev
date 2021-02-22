import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SejaCuidadorPageRoutingModule } from './seja-cuidador-routing.module';

import { SejaCuidadorPage } from './seja-cuidador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SejaCuidadorPageRoutingModule
  ],
  declarations: [SejaCuidadorPage]
})
export class SejaCuidadorPageModule {}
