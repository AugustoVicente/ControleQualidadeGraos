import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-container',
  templateUrl: 'container.html',
})
export class ContainerPage 
{
  constructor(public navCtrl: NavController, public navParams: NavParams) 
  {
  }
}
