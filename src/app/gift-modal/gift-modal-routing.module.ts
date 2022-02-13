import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GiftModalPage } from './gift-modal.page';

const routes: Routes = [
  {
    path: '',
    component: GiftModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GiftModalPageRoutingModule {}
