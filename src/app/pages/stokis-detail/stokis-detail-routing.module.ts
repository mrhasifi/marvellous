import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StokisDetailPage } from './stokis-detail';

const routes: Routes = [
  {
    path: '',
    component: StokisDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StokisDetailPageRoutingModule { }
