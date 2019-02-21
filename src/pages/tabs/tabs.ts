import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CaminhaoPage } from '../transporte/tipo/caminhao/caminhao';
import { ProdutoPage } from '../produto/produto';
import { ClassificadorPage } from '../classificador/classificador';
import { ContainerPage } from '../transporte/tipo/container/container';
import { TremPage } from '../transporte/tipo/trem/trem';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage 
{
	private TransportePage:any;
	private tab1Root:any;
	private tab2Root:any;
	private tab3Root:any;
	
	constructor(public navCtrl: NavController, public navParams: NavParams) 
	{
		this.TransportePage = this.navParams.get("escolha");
		if(this.TransportePage === "CaminhaoPage")
			this.tab1Root = CaminhaoPage;
		if(this.TransportePage === "ContainerPage")
			this.tab1Root = ContainerPage;
		if(this.TransportePage === "TremPage")
			this.tab1Root = TremPage;
		this.tab2Root = ProdutoPage;
		this.tab3Root = ClassificadorPage;
	}
}
