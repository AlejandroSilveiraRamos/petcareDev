import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasseioPageRoutingModule } from './passeio-routing.module';

import { PasseioPage } from './passeio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasseioPageRoutingModule
  ],
  declarations: [PasseioPage]
})
export class PasseioPageModule {}
