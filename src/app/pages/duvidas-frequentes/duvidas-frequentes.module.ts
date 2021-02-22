import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule} from '@ionic/angular';

import { DuvidasFrequentesPageRoutingModule } from './duvidas-frequentes-routing.module';

import { DuvidasFrequentesPage } from './duvidas-frequentes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DuvidasFrequentesPageRoutingModule
  ],
  declarations: [DuvidasFrequentesPage]
})
export class DuvidasFrequentesPageModule {}
