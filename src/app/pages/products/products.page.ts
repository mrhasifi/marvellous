import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SegmentChangeEventDetail } from '@ionic/core';
import { MenuController } from '@ionic/angular';
import { take } from 'rxjs/operators';

import { Product } from './product.model';
import { ProductsService } from './products.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-info',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit, OnDestroy {
  loadedProduct: Product[];
  listedLoadedProduct: Product[];
  relevantProduct: Product[];
  isLoading = false;
  private productSub: Subscription;

  constructor(
    private placesProduct: ProductsService,
    private menuCtrl: MenuController,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.productSub = this.placesProduct.product.subscribe(places => {
      this.loadedProduct = places;
      this.relevantProduct = this.loadedProduct;
      this.listedLoadedProduct = this.relevantProduct.slice(1);
    });
  }

  ionViewWillEnter() {
    this.isLoading = true;
    this.placesProduct.fetchPlaces().subscribe(() => {
      this.isLoading = false;
    });
  }

  onOpenMenu() {
    this.menuCtrl.toggle();
  }

  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>) {
    this.authService.userId.pipe(take(1)).subscribe(userId => {
      if (event.detail.value === 'all') {
        this.relevantProduct = this.loadedProduct;
        this.listedLoadedProduct = this.relevantProduct.slice(1);
      } else {
        this.relevantProduct = this.loadedProduct.filter(
          place => place.userId !== userId
        );
        this.listedLoadedProduct = this.relevantProduct.slice(1);
      }
    });
  }

  ngOnDestroy() {
    if (this.productSub) {
      this.productSub.unsubscribe();
    }
  }
}
