import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';

import { ConferenceData } from '../../providers/conference-data';

@Component({
  selector: 'page-stokis-list',
  templateUrl: 'stokis-list.html',
  styleUrls: ['./stokis-list.scss'],
})
export class StokisListPage {
  stokis: any[] = [];

  constructor(
    public actionSheetCtrl: ActionSheetController,
    public confData: ConferenceData,
    public inAppBrowser: InAppBrowser,
    public router: Router
  ) { }

  ionViewDidEnter() {
    this.confData.getStokiss().subscribe((stokis: any[]) => {
      this.stokis = stokis;
    });
  }

  goToStokisFacebook(stokis: any) {
    this.inAppBrowser.create(
      `https://facebook.com/${stokis.facebook}`,
      '_blank'
    );
  }

  async openStokisShare(stokis: any) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Share ' + stokis.name,
      buttons: [
        {
          text: 'Copy Link',
          handler: () => {
            console.log(
              'Copy link clicked on https://facebook.com/' + stokis.facebook
            );
            if (
              (window as any)['cordova'] &&
              (window as any)['cordova'].plugins.clipboard
            ) {
              (window as any)['cordova'].plugins.clipboard.copy(
                'https://facebook.com/' + stokis.facebook
              );
            }
          }
        },
        {
          text: 'Share via ...'
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });

    await actionSheet.present();
  }

  async openContact(stokis: any) {
    const mode = 'ios'; // this.config.get('mode');

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Contact ' + stokis.name,
      buttons: [
        {
          text: `Email ( ${stokis.email} )`,
          icon: mode !== 'ios' ? 'mail' : null,
          handler: () => {
            window.open('mailto:' + stokis.email);
          }
        },
        {
          text: `Call ( ${stokis.phone} )`,
          icon: mode !== 'ios' ? 'call' : null,
          handler: () => {
            window.open('tel:' + stokis.phone);
          }
        }
      ]
    });

    await actionSheet.present();
  }
}
