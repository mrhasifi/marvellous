import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ConferenceData } from '../../providers/conference-data';

@Component({
  selector: 'page-stokis-detail',
  templateUrl: 'stokis-detail.html',
  styleUrls: ['./stokis-detail.scss'],
})
export class StokisDetailPage {
  stokis: any;

  constructor(
    private dataProvider: ConferenceData,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ionViewWillEnter() {
    this.dataProvider.load().subscribe((data: any) => {
      const stokisId = this.route.snapshot.paramMap.get('stokisId');
      if (data && data.stokiss) {
        for (const stokis of data.stokiss) {
          if (stokis && stokis.id === stokisId) {
            this.stokis = stokis;
            break;
          }
        }
      }
    });
  }
}
