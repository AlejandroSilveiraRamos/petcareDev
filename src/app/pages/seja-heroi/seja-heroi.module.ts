import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SejaHeroiPageRoutingModule } from './seja-heroi-routing.module';

import { SejaHeroiPage } from './seja-heroi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SejaHeroiPageRoutingModule
  ],
  declarations: [SejaHeroiPage]
})
export class SejaHeroiPageModule {}
