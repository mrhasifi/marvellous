import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { StokisListPage } from './stokis-list';
import { StokisListPageRoutingModule } from './stokis-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    StokisListPageRoutingModule
  ],
  declarations: [StokisListPage],
})
export class StokisListModule {}
