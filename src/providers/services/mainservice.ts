import { Injectable, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


import { Http, Headers, Response } from '@angular/http';
import { LoadingController, ToastController, NavController } from 'ionic-angular';
//local storage
import { Storage } from '@ionic/storage';


@Injectable()
export class MainService {

    loader: any;
    loaderArray: any = [];

    constructor(
        private storage: Storage,
        private http: Http,
        public loadingCtrl: LoadingController,
        private toastCtrl: ToastController) {
            
    }

    public showLoader() {
        if (!this.loader || this.loader._detached) {
            this.loader = this.loadingCtrl.create({
                content: 'Please wait...'
            });
            this.loaderArray.push(this.loader);
            this.loader.present();
        }
    }

    public dismissLoader() {
        //check if there is a loader
        if (this.loader && !this.loader._detached) {
            this.loader.dismiss();
            this.loader = null;
        }
    }

    getSurahList(){
        return new Promise(resolve=>{
            this.http.get(`http://api.alquran.cloud/surah`)
                .map(
                  res => res.json()
                ).subscribe(res=>{
                    resolve(res);
                });
        });
    }


}