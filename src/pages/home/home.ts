import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MainService } from '../../providers/services/mainservice'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  surahs: any = [];

  constructor(
    public mainservice: MainService,
    public navCtrl: NavController
  ) {
    this.deferred();
  }

  async deferred() {
    console.log('came here');
    let data: any = await this.mainservice.getSurahList();
    if (data.data) {
      this.surahs = data.data;
    }
  }

}
