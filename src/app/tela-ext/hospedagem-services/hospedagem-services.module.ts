import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HospedagemServicesPageRoutingModule } from './hospedagem-services-routing.module';

import { HospedagemServicesPage } from './hospedagem-services.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HospedagemServicesPageRoutingModule
  ],
  declarations: [HospedagemServicesPage]
})
export class HospedagemServicesPageModule {}
