import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SegmentChangeEventDetail } from '@ionic/core';
import { MenuController } from '@ionic/angular';
import { take } from 'rxjs/operators';

import { Produk } from './produk.model';
import { ProdukService } from './produk.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit, OnDestroy {
  loadedProduk: Produk[];
  listedLoadedProduk: Produk[];
  relevantProduk: Produk[];
  isLoading = false;
  private produkSub: Subscription;

  constructor(
    private placesProduk: ProdukService,
    private menuCtrl: MenuController,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.produkSub = this.placesProduk.produk.subscribe(places => {
      this.loadedProduk = places;
      this.relevantProduk = this.loadedProduk;
      this.listedLoadedProduk = this.relevantProduk.slice(1);
    });
  }

  ionViewWillEnter() {
    this.isLoading = true;
    this.placesProduk.fetchPlaces().subscribe(() => {
      this.isLoading = false;
    });
  }

  onOpenMenu() {
    this.menuCtrl.toggle();
  }

  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>) {
    this.authService.userId.pipe(take(1)).subscribe(userId => {
      if (event.detail.value === 'all') {
        this.relevantProduk = this.loadedProduk;
        this.listedLoadedProduk = this.relevantProduk.slice(1);
      } else {
        this.relevantProduk = this.loadedProduk.filter(
          place => place.userId !== userId
        );
        this.listedLoadedProduk = this.relevantProduk.slice(1);
      }
    });
  }

  ngOnDestroy() {
    if (this.produkSub) {
      this.produkSub.unsubscribe();
    }
  }
}
