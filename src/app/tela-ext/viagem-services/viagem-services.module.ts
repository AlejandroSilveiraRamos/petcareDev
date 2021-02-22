import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViagemServicesPageRoutingModule } from './viagem-services-routing.module';

import { ViagemServicesPage } from './viagem-services.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViagemServicesPageRoutingModule
  ],
  declarations: [ViagemServicesPage]
})
export class ViagemServicesPageModule {}
