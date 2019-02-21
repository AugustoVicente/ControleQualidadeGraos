import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, RequestOptions } from '@angular/http';
import { ClassificadorPage } from '../classificador/classificador';
import { FuncoesBasicasProvider } from '../../providers/funcoes-basicas/funcoes-basicas';
import { TranslateService } from '@ngx-translate/core';
import { BluetoothProvider } from '../../providers/bluetooth/bluetooth';
import { PrintProvider } from '../../providers/print/print';
import { Observable } from 'rxjs/Observable';
import { PrinterListModalPage } from '../printer-list-modal/printer-list-modal';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-produto',
  templateUrl: 'produto.html',
})
export class ProdutoPage 
{
	selectedPrinter                     : any     = [];
	private infoClassificacao           : any     = [];
	private infoClassificacaoPrint      : any;
	private msgClassificacao            : any;
	private produtos                    : any;
	private desabilitar                 : boolean = false;
	private produto                     : string  = "";
	public jsonObj                      : any     = [];
	public leituras                     : any     = [];
	public leiturasStatus               : any     = [];
	private fatores                     : any     = [];
	public macEscolhido                 : any;
	public msg                          : string;
	public isEnabled                    : boolean = true;
	constructor
	(
		public navCtrl                    : NavController,
		public navParams                  : NavParams,
		public funcBasicProv              : FuncoesBasicasProvider,
		private printProvider             : PrintProvider,
		private modalCtrl                 : ModalController,
		public blue                       : BluetoothProvider,
		private alertCtrl                 : AlertController,
		public http                       : Http,
		public actionSheetCtrl            : ActionSheetController   ,
		private loadingCtrl               : LoadingController
	) 
	{
		this.msg = this.funcBasicProv.buscarTraducao('toast.campos');
		localStorage.setItem('infoClassificacao', JSON.stringify(null));
		this.buscarProdutos();
		this.blue.turnOn();
		// this.blue.isEnabled = false;
	}
	buscarFatores()
	{
		this.leituras = [];
		this.leiturasStatus = [];
		try 
		{
		let type: string = "application/x-www-form-urlencoded; charset=UTF-8",
		headers: any = new Headers({ 'Content-Type': type }),
		options: any = new RequestOptions({ headers: headers, search: new URLSearchParams() }),
		url: any = this.funcBasicProv.DATA_URL + '?acao=buscarFatores' + '&idProduto=' + this.produto;
		return this.http.get(url, options).map(res => res.json()).subscribe(fatores => 
		{ 
			// criando o peso da amostra pra aparecer na tela
			var pesoAmostra = [];
			pesoAmostra["nome"] = this.funcBasicProv.buscarTraducao('pesoAmostra');
			// adicionando nos fatores
			this.fatores.push(pesoAmostra);
			this.leituras[0] = "";
			this.leiturasStatus[0] = false;
			if (this.fatores.length > 0) 
			{
				for (let index = 0; index < fatores.length; index++) 
				{
					// adicionando outros fatores
					this.fatores.push(fatores[index]);
					this.leituras[index + 1] = "";
					this.leiturasStatus[index + 1] = false;
					this.createJSON(this.fatores[index + 1].nome);
				}
				// this.autopreenchido();
			}
		});
		}
		catch (errorMessage) 
		{
		this.funcBasicProv.mostrarToast("erro");
		}
	}
	autopreenchido()
	{
		try 
		{
			this.leituras[0] = "144.0"
			this.leituras[1] = "13.3";
			this.leituras[2] = "43.4";
			this.leituras[3] = "13.7";
			this.leituras[4] = "2.40";
			this.leituras[5] = "6.50";
			this.leituras[6] = "8.54";
			this.leituras[7] = "4.30";
			this.leituras[8] = "9.64";
		} 
		catch (error) {}
	}
	enviarDados()
	{
		if (this.fatores != "") 
		{
		this.infoClassificacao = {};
		localStorage.setItem('produto', this.produto);
		var n;
		for (let index = 0; index < this.produtos.length; index++) 
		{
			const element = this.produtos[index];
			if (this.produtos[index].idproduto == this.produto)
			{
			n = index;
			}
		}
		this.infoClassificacaoPrint = this.funcBasicProv.buscarTraducao('principal.produto') + ": " + this.produtos[n].nome + "\n";;
		// começar pelo 1 pois o zero é o peso da amostra
		for (let index = 1; index < this.fatores.length; index++) 
		{
			const element = this.leituras[index];
			if (element == "") 
			{
			this.infoClassificacao = null;
			index = this.leituras.length + 1;
			}
			else 
			{
			var jsonfator = {};
			jsonfator["idFatorValor"] = this.fatores[index].idFator + "," + element;
			this.infoClassificacao[index] = jsonfator;
			if(index == 1){
				this.infoClassificacaoPrint += this.fatores[0].nome + ": " + this.leituras[0] + "g\n";
			}
			this.infoClassificacaoPrint += this.fatores[index].nome + ": " + element + "%\n";
			}
		}
		this.infoClassificacaoPrint += "!----------------------\n";
		if (this.infoClassificacao == null) 
		{
			this.funcBasicProv.mostrarToast(this.funcBasicProv.buscarTraducao('toast.campos'));
		}
		else 
		{
			// gravando o peso na memória para usar depois
			var jsonTransport = JSON.parse(localStorage.getItem('infoTransport'));
			jsonTransport.pesoamostra = this.leituras[0];
			localStorage.setItem('infoTransport', JSON.stringify(jsonTransport));
			localStorage.setItem('infoClassificacao', JSON.stringify(this.infoClassificacao));
			localStorage.setItem('infoClassificacaoPrint', this.infoClassificacaoPrint);
			this.desabilitar = true;
		}
		}
		else 
		{
		this.funcBasicProv.mostrarToast(this.funcBasicProv.buscarTraducao('toast.campos'));
		}
	}
	editar()
	{
		localStorage.setItem('infoClassificacao', JSON.stringify(null));
		this.desabilitar = false;
	}
	buscarProdutos()
	{
		try 
		{
		//declarando parametros de conexão
		let type: string = "application/x-www-form-urlencoded; charset=UTF-8",
		headers: any = new Headers({ 'Content-Type': type }),
		options: any = new RequestOptions({ headers: headers, search: new URLSearchParams() }),
		url: any = this.funcBasicProv.DATA_URL + "?acao=buscarProdutos";
		return this.http.get(url, options).map(res => res.json()).subscribe(
		produtos => 
		{
			this.produtos = produtos;
		});
		}
		catch (errorMessage) 
		{
		this.funcBasicProv.mostrarToast(this.funcBasicProv.buscarTraducao('toast.errorMessage'));
		}
	}
	getDadosFator(fator,i)
	{
		// Executar se o fator não tiver sido lido ainda
		if(!this.leiturasStatus[i])
		{
			// se não estiver conectado em nenhum dispositivo
			if(this.blue.espMac == undefined || this.blue.espMac == null || this.blue.espMac == "")
			{
				alert(this.funcBasicProv.buscarTraducao('ble.noDevice'));
			}
			else
			{
				//verificar se é o peso da amostra ou umidade. OBS: Ta assim provisóriamente pra não ter que mudar nada no banco.
				if(fator == this.fatores[0].nome || fator == "UMIDADE")
				{
					this.blue.fatorToValue(this.blue.espMac, fator);
					this.blue.ble.startNotification(this.blue.espMac, this.blue.macNotifyWrite1, this.blue.macNotifyWrite3).subscribe(
					buffer => 
					{
						//  se vier leitura zero avisa que ocorreu erro (está acontecendo esse bug na caixa)
						if(parseFloat(this.blue.ab2str(buffer)) == 0)
						{
							this.funcBasicProv.mostrarToast((this.funcBasicProv.buscarTraducao('ble.error')));
						}
						else
						{
							this.leituras[i] = parseFloat(this.blue.ab2str(buffer));
							this.leiturasStatus[i] = true;
							this.funcBasicProv.mostrarToast(this.funcBasicProv.buscarTraducao('toast.valorRecebido'));
							return true;
						}
					}, 
					wrong => 
					{
						this.funcBasicProv.mostrarToast((this.funcBasicProv.buscarTraducao('toast.error')+wrong));
					});
				}
				else
				{
					//se o peso da amostra estiver nulo não pode fazer os fatores pois vai dar pau na regra de 3
					if(this.leituras[0] == "" || this.leituras[0] == null || this.leituras[0] == undefined)
					{
						this.funcBasicProv.mostrarToast((this.funcBasicProv.buscarTraducao('toast.semPeso')));
					}
					else
					{
						// se não for impureza. OBS: Ta assim provisóriamente pra não ter que mudar nada no banco.
						if(fator != "IMPUREZAS")
						{
							// se a impureza não estiver preenchida ele alerta
							if(this.leituras[2] == "" || this.leituras[2] == null || this.leituras[2] == undefined)
							{
								this.funcBasicProv.mostrarToast((this.funcBasicProv.buscarTraducao('toast.semImpureza')));
							}
							// se tiver faz normalmente
							else
							{
								this.blue.fatorToValue(this.blue.espMac, fator);
								this.blue.ble.startNotification(this.blue.espMac, this.blue.macNotifyWrite1, this.blue.macNotifyWrite3).subscribe(
								buffer => 
								{
									//  se vier leitura zero avisa que ocorreu erro (está acontecendo esse bug na caixa)
									if(parseFloat(this.blue.ab2str(buffer)) == 0)
									{
										this.funcBasicProv.mostrarToast((this.funcBasicProv.buscarTraducao('ble.error')));
									}
									else
									{
										//inserindo com a regra de tres
										this.leituras[i] = ((parseFloat(this.blue.ab2str(buffer))*100)/this.leituras[0]).toFixed(2);
										this.leiturasStatus[i] = true;
										this.funcBasicProv.mostrarToast(this.funcBasicProv.buscarTraducao('toast.valorRecebido'));
										return true;
									}
								}, 
								wrong => 
								{
									this.funcBasicProv.mostrarToast((this.funcBasicProv.buscarTraducao('toast.error')+wrong));
								});
							}
						}
						// se for impureza
						else
						{
							this.blue.fatorToValue(this.blue.espMac, fator);
							this.blue.ble.startNotification(this.blue.espMac, this.blue.macNotifyWrite1, this.blue.macNotifyWrite3).subscribe(
							buffer => 
							{
								//  se vier leitura zero avisa que ocorreu erro (está acontecendo esse bug na caixa)
								if(parseFloat(this.blue.ab2str(buffer)) == 0)
								{
									this.funcBasicProv.mostrarToast((this.funcBasicProv.buscarTraducao('ble.error')));
								}
								else
								{
									//inserindo com a regra de tres
									this.leituras[i] = ((parseFloat(this.blue.ab2str(buffer))*100)/this.leituras[0]).toFixed(2);
									// retira o valor das impurezas do total
									this.leituras[0] = this.leituras[0] - parseFloat(this.blue.ab2str(buffer));
									this.leiturasStatus[i] = true;
									this.funcBasicProv.mostrarToast(this.funcBasicProv.buscarTraducao('toast.valorRecebido'));
									return true;
								}
							}, 
							wrong => 
							{
								this.funcBasicProv.mostrarToast((this.funcBasicProv.buscarTraducao('toast.error')+wrong));
							});
						}
					}
				}
			}
		}
		else
		{
			this.funcBasicProv.mostrarToast(this.funcBasicProv.buscarTraducao('toast.lido'));
		}
	}
	async connect()
	{
		this.funcBasicProv.mostrarLoadBLESearch();
		this.blue.scanBLE();
	}
	createJSON(fator)
	{
		var item = {};
		item[fator] = "";
		this.jsonObj.push(item);
		return this.jsonObj;
	}
	padrao(padrao, valor)
	{
		if(padrao)
		{
			if(parseFloat(padrao) >= parseFloat(valor))
			{
				return true;
			}
			else
			{
				return false;
			}
		}
		else
		{
			return true;
		}		
	}
}
