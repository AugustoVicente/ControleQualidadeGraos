import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';

@Component({
  selector: 'page-printer-list-modal',
  templateUrl: 'printer-list-modal.html',
})
export class PrinterListModalPage 
{
  printerList         : any = [];
  constructor
  (
    public navCtrl    : NavController, 
    public navParams  : NavParams, 
    private viewCtrl  : ViewController
  ) 
  {
  }
  ionViewDidLoad() 
  {
    this.printerList = this.navParams.get('data');
  }
  select(data) 
  {
    this.viewCtrl.dismiss(data);
  }
  voltar()
  {
    this.viewCtrl.dismiss('');
  }
}
