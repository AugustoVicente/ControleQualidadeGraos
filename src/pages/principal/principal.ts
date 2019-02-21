import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { EscolhaPage } from '../transporte/escolha/escolha';
import { FuncoesBasicasProvider } from '../../providers/funcoes-basicas/funcoes-basicas';
import { LoginPage } from '../login/login';
import { PesquisaPage } from '../pesquisa/pesquisa';

@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage 
{
	private today: any;
	private produtos: any;
	private dataHoje : any;
	public pesquisa: string = '';
	public pEntradaSaida:  boolean = false;
	public pLaudo:  boolean = false;
	public pData: boolean = false;
	public pOs :  boolean = false;
	public pProduto: boolean = false;
	public entradaSaida:  string = '';
	public laudo:  string = '';
	public data: string = '';
	public os :  string = '';
	public produto: string = '';
	private historicos:any;

	constructor
	(
		public navCtrl: NavController,
		public navParams: NavParams,
		public funcBasicProv: FuncoesBasicasProvider,
		public http: Http,
	) 
	{
		this.buscarProduto();
		this.buscarLaudos();
		this.today = this.funcBasicProv.getDateToday();
		this.dataHoje = this.funcBasicProv.transformaData();
	}
	novo() 
	{
		this.navCtrl.push(EscolhaPage);
	}
	pesquisar()
	{
		this.navCtrl.push(PesquisaPage);
	}
	exit() 
	{
		localStorage.clear();
		this.navCtrl.push(LoginPage);
	}
	buscarLaudos() 
	{
		try 
		{
			//declarando parametros de conexão
			let type: string = "application/x-www-form-urlencoded; charset=UTF-8",
				headers: any = new Headers({ 'Content-Type': type }),
				options: any = new RequestOptions({ headers: headers, search: new URLSearchParams() }),
				url: any = this.funcBasicProv.DATA_URL + "?acao=buscarLaudo&idUser=" + localStorage.getItem("idUser");
			return this.http.get(url, options).map(res => res.json()).subscribe(historico => 
			{
				this.historicos = historico;
			}
			);
		}
		//se houver falha na conexão avisa
		catch (errorMessage) 
		{
			this.funcBasicProv.mostrarToast('erro');
		}
	}
	buscarProduto() 
	{
		try 
		{
			//declarando parametros de conexão
			let type: string = "application/x-www-form-urlencoded; charset=UTF-8",
				headers: any = new Headers({ 'Content-Type': type }),
				options: any = new RequestOptions({ headers: headers, search: new URLSearchParams() }),
				url: any = this.funcBasicProv.DATA_URL + "?acao=buscarProdutos";
			return this.http.get(url, options).map(res => res.json()).subscribe(produto => 
			{
				this.produto = produto;
			}
			);
		}
		//se houver falha na conexão avisa
		catch (errorMessage) 
		{
			this.funcBasicProv.mostrarToast('erro');
		}
	}
	doRefresh(refresher) 
	{
		setTimeout(() => 
		{
			refresher.complete();
			this.buscarLaudos();  
		}, 500);
	}
	test(){
		this.os           = "";
		this.laudo        = "";
		this.data         = "";
		this.entradaSaida = "";
	}
}
