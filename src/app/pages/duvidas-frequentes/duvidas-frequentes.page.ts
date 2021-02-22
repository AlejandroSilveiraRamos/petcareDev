import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

import { OneComponent } from 'src/app/popover/one/one.component';
import { TwoComponent } from 'src/app/popover/two/two.component';
import { ThreeComponent } from 'src/app/popover/three/three.component';
import { FourComponent } from 'src/app/popover/four/four.component';
import { FiveComponent } from 'src/app/popover/five/five.component';
import { SixComponent } from 'src/app/popover/six/six.component';
import { SevenComponent } from 'src/app/popover/seven/seven.component';
import { EightComponent } from 'src/app/popover/eight/eight.component';



@Component({
  selector: 'app-duvidas-frequentes',
  templateUrl: './duvidas-frequentes.page.html',
  styleUrls: ['./duvidas-frequentes.page.scss'],
})
export class DuvidasFrequentesPage {

  value = 0;

  constructor(public popoverController: PopoverController) {}

  async onePopover(ev: Event) {
    const popover = await this.popoverController.create({
      component: OneComponent,
      componentProps: {
        custom_id: this.value
      },
      event: ev
    });
     popover.present();
  }
  async twoPopover(ev: Event) {
    const popover = await this.popoverController.create({
      component: TwoComponent,
      componentProps: {
        custom_id: this.value
      },
      event: ev
    }); 
     popover.present();
  }
  async threePopover(ev: Event) {
    const popover = await this.popoverController.create({
      component: ThreeComponent,
      componentProps: {
        custom_id: this.value
      },
      event: ev
    });
     popover.present();
  }
  async fourPopover(ev: Event) {
    const popover = await this.popoverController.create({
      component: FourComponent,
      componentProps: {
        custom_id: this.value
      },
      event: ev
    });
     popover.present();
  }
  async fivePopover(ev: Event) {
    const popover = await this.popoverController.create({
      component: FiveComponent,
      componentProps: {
        custom_id: this.value
      },
      event: ev
    });
     popover.present();
  }
  async sixPopover(ev: Event) {
    const popover = await this.popoverController.create({
      component: SixComponent,
      componentProps: {
        custom_id: this.value
      },
      event: ev
    });
     popover.present();
  }
  async sevenPopover(ev: Event) {
    const popover = await this.popoverController.create({
      component: SevenComponent,
      componentProps: {
        custom_id: this.value
      },
      event: ev
    });
     popover.present();
  }
  async eightPopover(ev: Event) {
    const popover = await this.popoverController.create({
      component: EightComponent,
      componentProps: {
        custom_id: this.value
      },
      event: ev
    });
     popover.present();
  }

}
