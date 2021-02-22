import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasseioServicesPageRoutingModule } from './passeio-services-routing.module';

import { PasseioServicesPage } from './passeio-services.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasseioServicesPageRoutingModule
  ],
  declarations: [PasseioServicesPage]
})
export class PasseioServicesPageModule {}
