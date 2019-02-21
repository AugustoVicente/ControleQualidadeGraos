import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { App } from "ionic-angular"; 
import { Http, RequestOptions } from '@angular/http';
import { FuncoesBasicasProvider } from '../../../../providers/funcoes-basicas/funcoes-basicas';
import { TranslateService } from '@ngx-translate/core';
import { PrincipalPage } from '../../../principal/principal';

@Component({
  selector: 'page-caminhao',
  templateUrl: 'caminhao.html',
})
export class CaminhaoPage 
{
	private today: any;
	public infoTransport: any;
	public infoTransportPrint: any;
	public infoEmpresaPrint: any;
	private nt: any;
	private nio: any;
	public msgTransport: any;
	public msg: string = "";
	private desabilitar: boolean = false;
	public notaFiscal: string = "";
	public entradaSaida: string = "";
	public laudo: string = "";
	public notaFiscalDisable: boolean;
	public data: string = "";
	public os: string = "";
	public todasOs: any = [];
	public cliente: string = "";
	public clienteNome: string = "";
	public municipio: string = "Indefinido";
	public placa1: string = "";
	public placa2: string = "";
	public placa3: string = "";
	public furos: string = "";
	public lacres: string = "";
	public transporte: string = "";
	public barcodeOptions: any;
	public barcodeText: any;
	public placactrl1 : string = "ios-add-circle-outline";
	public placactrl2 : string = "ios-add-circle-outline";
	public ativa_placa_2 : boolean = false;
	public ativa_placa_3 : boolean = false;
	constructor
	(
		private barcodeScanner: BarcodeScanner,
		public navParams: NavParams,
		public funcBasicProv: FuncoesBasicasProvider,
		public translate: TranslateService,
		private geolocation: Geolocation,
		private platform: Platform,
		public http: Http,
		private app: App
	) 
	{
		this.funcBasicProv.mostrarLoad();
		platform.registerBackButtonAction(()=>{this.voltar();},1);
		this.getLocation();
		this.buscaOS();
		this.translate.get('escolha.caminhao').subscribe((res: string) => 
		{
			this.transporte = res;
		});
		this.translate.get('toast.campos').subscribe((res: string) => 
		{
			this.msg = res;
		});
		this.translate.get('transporte.textobarcode').subscribe((res: string) => 
		{
			this.barcodeText = res;
		});
		this.barcodeOptions = 
		{
			prompt: this.barcodeText
		}
		localStorage.setItem('infoTransport', JSON.stringify(null));
		this.data = this.today = this.funcBasicProv.getDateToday();
		this.funcBasicProv.exitLoad();
		// this.autopreenchido();
	}
	openScanner() 
	{
		this.barcodeScanner.scan(this.barcodeOptions).then(
		(barcodeData) => 
		{
			this.notaFiscal = barcodeData.text;
		}, (err) => 
		{
			this.funcBasicProv.mostrarToast(this.funcBasicProv.buscarTraducao('toast.error'));
		});
	}
	enviar() 
	{
		if (this.notaFiscal === "" && this.notaFiscalDisable == true)
		{
			this.funcBasicProv.mostrarToast(this.msg);
		}
		else if (this.entradaSaida === "")
		{	
			this.funcBasicProv.mostrarToast(this.msg);
		}
		else if (this.data === "")
		{
			this.funcBasicProv.mostrarToast(this.msg);
		}
		else if (this.os === "")
		{
			this.funcBasicProv.mostrarToast(this.msg);
		}
		else if (this.cliente === "")
		{
			this.funcBasicProv.mostrarToast(this.msg);
		}
		else if (this.municipio === "")
		{
			this.funcBasicProv.mostrarToast(this.msg);
		}
		else if (this.placa1 === "")
		{
			this.funcBasicProv.mostrarToast(this.msg);
		}
		else if (this.furos === "")
		{
			this.funcBasicProv.mostrarToast(this.msg);
		}
		else 
		{
			if (this.transporte == this.funcBasicProv.buscarTraducao('escolha.caminhao'))
			{
				this.nt = '1';
			}
			if (this.transporte == this.funcBasicProv.buscarTraducao('escolha.container'))
			{
				this.nt = '2';
			}
			if (this.transporte == this.funcBasicProv.buscarTraducao('escolha.trem'))
			{
				this.nt = '3';
			}
			if (this.entradaSaida == this.funcBasicProv.buscarTraducao('principal.in'))
			{
				this.nio = '1';
			}
			if (this.entradaSaida == this.funcBasicProv.buscarTraducao('principal.out'))
			{
				this.nio = '0';
			}
			this.infoTransport = 
			{
				"idUser": localStorage.getItem('idUser'),
				"idProduto": "",
				"transporte": this.nt,
				"tipoTransporte": "'1'",
				"obs": "",
				"data": this.funcBasicProv.commentsMySQL(this.data),
				"notaFiscal": this.notaFiscalcheck(),
				"cliente": this.funcBasicProv.commentsMySQL(this.clienteNome),
				"tipo_acao": this.nio,
				"os": this.funcBasicProv.commentsMySQL(this.os),
				"cidade": this.funcBasicProv.commentsMySQL(this.municipio),
				"furos": this.furos,
				"lacres": this.funcBasicProv.commentsMySQL(this.lacres),
				"numeracao" : this.funcBasicProv.commentsMySQL(this.placa1),
				"numeracao2" : this.funcBasicProv.commentsMySQL(this.placa2),
				"numeracao3" : this.funcBasicProv.commentsMySQL(this.placa3),
				"pesoamostra": 0
			};
			localStorage.setItem('infoTransport', JSON.stringify(this.infoTransport));
			this.desabilitar = true;
			this.notaFiscalDisable = false;
			this.infoTransportPrint =
				this.funcBasicProv.buscarTraducao('transporte.notaFiscal') + ": " + this.notaFiscal + "\n" +
				this.funcBasicProv.buscarTraducao('transporte.tipo') + ": " + this.entradaSaida + "\n" +
				this.funcBasicProv.buscarTraducao('principal.data') + ": " + this.data + "\n" +
				this.funcBasicProv.buscarTraducao('principal.os') + ": " + this.os + "\n" +
				this.funcBasicProv.buscarTraducao('laudo.cliente') + ": " + this.clienteNome + "\n" +
				this.funcBasicProv.buscarTraducao('laudo.municipio') + ": " + this.municipio + "\n" +
				this.funcBasicProv.buscarTraducao('laudo.placa') + ": " + this.placa1 + "\n";
			if (this.placa2 !== "")
			{
				this.infoTransportPrint +=	this.funcBasicProv.buscarTraducao('laudo.placa') + " 2: " + this.placa2 + "\n";
				if (this.placa3 !== "")
				{
					this.infoTransportPrint +=	this.funcBasicProv.buscarTraducao('laudo.placa') + " 3: " + this.placa2 + "\n";
				}
			}
			this.infoTransportPrint +=	
				this.funcBasicProv.buscarTraducao('laudo.placa') + " 2: " + this.placa2 + "\n" +
				this.funcBasicProv.buscarTraducao('laudo.placa') + " 3: " + this.placa3 + "\n" +
				this.funcBasicProv.buscarTraducao('transporte.furos') + ": " + this.furos + "\n" +
				this.funcBasicProv.buscarTraducao('transporte.lacres') + ": " + this.lacres + "\n" +
				"!----------------------\n";
			localStorage.setItem("infoTransportPrint", this.infoTransportPrint);
		}
	}
	editar() 
	{
		this.desabilitar = false;
		this.notaFiscalDisable = true;
		localStorage.setItem('infoTransport', JSON.stringify(null));
	}
	buscaOS()
	{
		let type: string = "application/x-www-form-urlencoded; charset=UTF-8",
		headers: any = new Headers({ 'Content-Type': type }),
		options: any = new RequestOptions({ headers: headers, search: new URLSearchParams() }),
		url: any =  this.funcBasicProv.DATA_URL + '?acao=buscarTodasOS';
		return this.http.get(url, options).map(res => res.json()).subscribe(OS => 
		{
			this.todasOs = OS;
		});
	}
	selecionaOs(idOs)
	{
		var index = this.todasOs.findIndex(function(item, i) 
		{
			return item.id == idOs;
		}); 
		var cliente = this.todasOs[index].cliente;
		var clienteNome = this.todasOs[index].clienteNome;
		var furos = this.todasOs[index].furos;
		this.cliente = cliente;
		this.clienteNome = clienteNome;
		console.log(this.todasOs[index]);
		this.furos = furos;
		this.infoEmpresaPrint =
		"  ! "+this.clienteNome + "\n" +
		"CNPJ: " + this.todasOs[index].cpf + "\n" +
		this.todasOs[index].cidade + " - " + this.todasOs[index].estado + "\n" +
		"!----------------------\n";
		localStorage.setItem("infoEmpresaPrint", this.infoEmpresaPrint);
	}
	voltar()
	{
		this.app.getRootNav().setRoot(PrincipalPage);
	}
	async getLocation()
	{
		await this.platform.ready();
		await this.geolocation.getCurrentPosition().then((resp) => 
		{
		let type: string = "application/x-www-form-urlencoded; charset=UTF-8",
			headers: any = new Headers({ 'Content-Type': type }),
			options: any = new RequestOptions({ headers: headers, search: new URLSearchParams() }),
			// url: any = "https://reverse.geocoder.cit.api.here.com/6.2/reversegeocode.json?"
			// +"prox="+resp.coords.latitude+"%2C"+resp.coords.longitude+"%2C50&mode=retrieveAddresses&maxresults=1&gen=8&app_id=YspwSU1nSjhy4GtJdrx4&"
			// +"app_code=LL5lFruZITuK8MAIv8xMYQ	";
			url: any = "http://maps.googleapis.com/maps/api/geocode/json?latlng="+resp.coords.latitude+","+resp.coords.longitude+"&sensor=true";
		return this.http.get(url, options).map(res => res.json()).subscribe(local => 
		{
			this.municipio = /*local.Response.View[0].Result[0].Location.Address.Label*/local.results[1].formatted_address;
		});
		}).catch((error) => 
		{
		this.funcBasicProv.mostrarToast(this.funcBasicProv.buscarTraducao('transporte.erroLocal')+error.message);
		});
	}
	// autopreenchido()
	// {
	// 	this.notaFiscal = "8763487264872";
	// 	this.entradaSaida = this.funcBasicProv.buscarTraducao('principal.in');
	// 	this.nio = "1";
	// 	this.cliente = "Eduardo Figueiredo";
	// 	this.os = "1";
	// 	this.placa1 = "AAA-0000";
	// 	this.furos = "3";
	// 	this.lacres = "LC4";
	// }
	notaFiscalcheck()
	{
		if(this.notaFiscalDisable == false)
		{
			return null;
		}
		else
		{
			return this.funcBasicProv.commentsMySQL(this.notaFiscal)
		}
	}
	controla_placa(tipo)
	{
		if(tipo == 1)
		{
			if(this.placactrl1 == "ios-add-circle-outline")
			{
				this.placactrl1 = "ios-remove-circle-outline";
				this.ativa_placa_2 = true;
			}
			else
			{
				this.ativa_placa_2 = false;
				if(this.ativa_placa_3 == true)
				{
					this.ativa_placa_3 = false;
					this.placactrl2 = "ios-add-circle-outline";
				}
				this.placactrl1 = "ios-add-circle-outline";
			}
		}
		else
		{
			if(this.placactrl2 == "ios-add-circle-outline")
			{
				this.placactrl2 = "ios-remove-circle-outline";
				this.ativa_placa_3 = true;
			}
			else
			{
				this.ativa_placa_3 = false;
				this.placactrl2 = "ios-add-circle-outline";
			}
		}
	}
}
