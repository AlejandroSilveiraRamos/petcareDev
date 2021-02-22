import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeusPetsPageRoutingModule } from './meus-pets-routing.module';

import { MeusPetsPage } from './meus-pets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeusPetsPageRoutingModule
  ],
  declarations: [MeusPetsPage]
})
export class MeusPetsPageModule {}
