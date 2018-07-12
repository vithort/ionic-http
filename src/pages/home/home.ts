import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditData } from '../../providers/reddit-data/reddit-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController
    ,public redditService: RedditData
  ) {

  }

  ionViewDidLoad() {
    //this.redditService.getRemoteData();
    this.redditService.getLocalData();
  }

}
