import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CaminhaoPage } from '../tipo/caminhao/caminhao';
import { ContainerPage } from '../tipo/container/container';
import { TremPage } from '../tipo/trem/trem';
import { TabsPage } from '../../tabs/tabs';

@Component({
  selector: 'page-escolha',
  templateUrl: 'escolha.html',
})
export class EscolhaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  
  selectTruck(){ 
    this.navCtrl.setRoot(TabsPage, {escolha:"CaminhaoPage"} );
  }
  selectContainer(){
    this.navCtrl.setRoot(TabsPage, {escolha:"ContainerPage"});
  }
  selectTrem(){
    this.navCtrl.setRoot(TabsPage, {escolha:"TremPage"});
  }

}
