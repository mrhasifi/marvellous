import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StokisListPage } from './stokis-list';
const routes: Routes = [
  {
    path: '',
    component: StokisListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StokisListPageRoutingModule {}
