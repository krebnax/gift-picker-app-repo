import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GiftModalPageRoutingModule } from './gift-modal-routing.module';

import { GiftModalPage } from './gift-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GiftModalPageRoutingModule
  ],
  declarations: [GiftModalPage]
})
export class GiftModalPageModule {}
