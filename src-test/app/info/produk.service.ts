import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Produk } from './produk.model';
import { AuthService } from '../auth/auth.service';
import { take, switchMap, map, tap } from 'rxjs/operators';

interface ProdukData {
  userId: string;
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProdukService {
  private _produk = new BehaviorSubject<Produk[]>([]);

  get produk() {
    return this._produk.asObservable();
  }

  constructor(private authService: AuthService, private http: HttpClient) { }

  fetchPlaces() {
    return this.authService.token.pipe(
      take(1),
      switchMap(token => {
        return this.http.get<{ [key: string]: ProdukData }>(
          `http://localhost:3000/produk.json?auth=${token}`
        );
      }),
      map(resData => {
        const produk = [];
        for (const key in resData) {
          if (resData.hasOwnProperty(key)) {
            produk.push(
              new Produk(
                key,
                resData[key].userId,
                resData[key].name,
                resData[key].description,
                resData[key].imageUrl,
                resData[key].price,
              )
            );
          }
        }
        return produk;
        // return [];
      }),
      tap(produk => {
        this._produk.next(produk);
      })
    );
  }

  getPlace(id: string) {
    return this.authService.token.pipe(
      take(1),
      switchMap(token => {
        return this.http.get<ProdukData>(
          `/offered-produk/${id}.json?auth=${token}`
        );
      }),
      map(produkData => {
        return new Produk(
          id,
          produkData.userId,
          produkData.name,
          produkData.description,
          produkData.imageUrl,
          produkData.price
        );
      })
    );
  }

  // uploadImage(image: File) {
  //   const uploadData = new FormData();
  //   uploadData.append('image', image);

  //   return this.authService.token.pipe(
  //     take(1),
  //     switchMap(token => {
  //       return this.http.post<{ imageUrl: string; imagePath: string }>(
  //         'https://us-central1-ionic-angular-course.cloudfunctions.net/storeImage',
  //         uploadData,
  //         { headers: { Authorization: 'Bearer ' + token } }
  //       );
  //     })
  //   );
  // }

  // addProduk(
  //   name: string,
  //   description: string,
  //   price: number,
  //   imageUrl: string
  // ) {
  //   let generatedId: string;
  //   let fetchedUserId: string;
  //   let newPlace: Produk;
  //   return this.authService.userId.pipe(
  //     take(1),
  //     switchMap(userId => {
  //       fetchedUserId = userId;
  //       return this.authService.token;
  //     }),
  //     take(1),
  //     switchMap(token => {
  //       if (!fetchedUserId) {
  //         throw new Error('No user found!');
  //       }
  //       newPlace = new Place(
  //         Math.random().toString(),
  //         title,
  //         description,
  //         imageUrl,
  //         price,
  //         dateFrom,
  //         dateTo,
  //         fetchedUserId,
  //         location
  //       );
  //       return this.http.post<{ name: string }>(
  //         `https://ionic-angular-course.firebaseio.com/offered-places.json?auth=${token}`,
  //         {
  //           ...newPlace,
  //           id: null
  //         }
  //       );
  //     }),
  //     switchMap(resData => {
  //       generatedId = resData.name;
  //       return this.places;
  //     }),
  //     take(1),
  //     tap(places => {
  //       newPlace.id = generatedId;
  //       this._places.next(places.concat(newPlace));
  //     })
  //   );
  // return this.places.pipe(
  //   take(1),
  //   delay(1000),
  //   tap(places => {
  //     this._places.next(places.concat(newPlace));
  //   })
  // );
  // }

  // updatePlace(placeId: string, title: string, description: string) {
  //   let updatedPlaces: Place[];
  //   let fetchedToken: string;
  //   return this.authService.token.pipe(
  //     take(1),
  //     switchMap(token => {
  //       fetchedToken = token;
  //       return this.places;
  //     }),
  //     take(1),
  //     switchMap(places => {
  //       if (!places || places.length <= 0) {
  //         return this.fetchPlaces();
  //       } else {
  //         return of(places);
  //       }
  //     }),
  //     switchMap(places => {
  //       const updatedPlaceIndex = places.findIndex(pl => pl.id === placeId);
  //       updatedPlaces = [...places];
  //       const oldPlace = updatedPlaces[updatedPlaceIndex];
  //       updatedPlaces[updatedPlaceIndex] = new Place(
  //         oldPlace.id,
  //         title,
  //         description,
  //         oldPlace.imageUrl,
  //         oldPlace.price,
  //         oldPlace.availableFrom,
  //         oldPlace.availableTo,
  //         oldPlace.userId,
  //         oldPlace.location
  //       );
  //       return this.http.put(
  //         `https://ionic-angular-course.firebaseio.com/offered-places/${placeId}.json?auth=${fetchedToken}`,
  //         { ...updatedPlaces[updatedPlaceIndex], id: null }
  //       );
  //     }),
  //     tap(() => {
  //       this._places.next(updatedPlaces);
  //     })
  //   );
  // }
}

// @Injectable({
//   providedIn: 'root'
// })
// export class ProdukService {
//   private produk: Produk[] = [];
//   private produkUpdate = new Subject<Produk[]>();

//   constructor(private http: HttpClient) { }

//   getProduk() {
//     this.http.get<{message: string, produk: Produk[]}>('http://localhost:3000/produk')
//       .subscribe((postData) => {
//         this.produk = postData.produk;
//         this.produkUpdate.next([...this.produk]);
//       });
//   }

//   getProdukUpdateListener() {
//     return this.produkUpdate.asObservable();
//   }

// }
