import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StokisDetailPage } from './stokis-detail';
import { StokisDetailPageRoutingModule } from './stokis-detail-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    StokisDetailPageRoutingModule
  ],
  declarations: [
    StokisDetailPage,
  ]
})
export class StokisDetailModule { }
