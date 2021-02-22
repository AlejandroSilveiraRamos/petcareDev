import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaStsPageRoutingModule } from './tela-sts-routing.module';

import { TelaStsPage } from './tela-sts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaStsPageRoutingModule
  ],
  declarations: [TelaStsPage]
})
export class TelaStsPageModule {}
