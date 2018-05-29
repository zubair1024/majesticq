import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MainService } from '../../providers/services/mainservice'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  list: any = [];
  originallist: any = [];

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
      this.list = data.data;
      this.originallist = data.data;
    }
  }

  filterItems(ev: any) {
    let val = ev.target.value;
    this.list = this.originallist;
    if (val && val.trim() !== '') {
      // console.log(val);
      this.list = this.list.filter(function (item) {
        return item.englishName.toLowerCase().includes(val.toLowerCase());
      });
    }
  }

}
