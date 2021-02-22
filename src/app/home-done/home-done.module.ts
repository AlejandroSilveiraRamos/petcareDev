import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeDonePageRoutingModule } from './home-done-routing.module';

import { HomeDonePage } from './home-done.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeDonePageRoutingModule
  ],
  declarations: [HomeDonePage]
})
export class HomeDonePageModule {}
