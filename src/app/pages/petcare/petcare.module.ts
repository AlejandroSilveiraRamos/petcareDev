import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PetcarePageRoutingModule } from './petcare-routing.module';

import { PetcarePage } from './petcare.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PetcarePageRoutingModule
  ],
  declarations: [PetcarePage]
})
export class PetcarePageModule {}
