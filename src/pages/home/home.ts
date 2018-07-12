import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditData } from '../../providers/reddit-data/reddit-data';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  var: any;
  key: String;
  name: String;

  constructor(
    public navCtrl: NavController
    //, public redditService: RedditData
    ,public http: Http
  ) {

  }

  ionViewDidLoad() {
    //this.redditService.getRemoteData();
    //this.redditService.getLocalData();
    //this.redditService.getJSON();
    //this.redditService.getTeste();
    this.teste();
  }

  teste() {

    this.var = this.http.get('assets/data/teste.json')
      .map(res => res.json())
      .subscribe(data => {
        console.log('Valor no getJSON()')
        this.key = data.key;
        this.name = data.name;
        console.log(this.key);
        console.log(this.name);
      })

      console.log(this.key);
      console.log(this.name);

  }

}
