import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { FuncoesBasicasProvider } from '../funcoes-basicas/funcoes-basicas';

@Injectable()
export class PrintProvider 
{
  idLaudo                 : any;
  infoTransportPrint      : any;
  infoClassificacaoPrint  : any;
  infoObsPrint            : any;
  texto                   : any;
  contadorPrint           : number = 0;
  infoEmpresa             : any;
  constructor
  (
    private btSerial: BluetoothSerial, 
    private alertCtrl: AlertController,
    private basicFuncProv:FuncoesBasicasProvider
  ) {}
  searchBt() 
  {
    return this.btSerial.list();
  }
  connectBT(address) 
  {
    return this.btSerial.connect(address);
  }
  testPrint(address, url) 
  {
    //padronizando id do laudo. OBS: não mexa!
    url = url.toString();
    while(url.length <= 17)
    {
      url = "0"+url;
    }
    // pegar o que foi guardado na memória
    this.requestLocalstorage();
    //divisória
    var barra = "!----------------------\n";
    //dados
    var data = "www.sbr-smartfile.com.br/trocaNota/web/TrocaNota/troca-admin/pag/gerando-pdf/pdf/"+url+"/"+url+".pdf";
    var qr = "(k 1A1 (k 1C	(k 1E0(k} 1P0"+data+"(k 1Q0";
    var cabecalho = this.infoEmpresa+"  ! TICKET LAUDO !\n  "+barra;
    this.texto = cabecalho + this.infoTransportPrint + this.infoClassificacaoPrint + this.infoObsPrint + qr;
    let xyz = this.connectBT(address).subscribe(
    data => 
    {
      this.btSerial.write(this.texto).then(
      dataz => 
      {
        let mno = this.alertCtrl.create(
        {
          title: this.basicFuncProv.buscarTraducao('impressao.sucesso'),
          buttons: ['OK']
        });
        mno.present();
        this.contadorPrint++;
        xyz.unsubscribe();
      }, 
      errx => 
      {
        let mno = this.alertCtrl.create(
        {
          title: this.basicFuncProv.buscarTraducao('impressao.conexao'),
          buttons: ['OK']
        });
        mno.present();
      });
    }, 
    err => 
    {
      let mno = this.alertCtrl.create(
      {
        title: this.basicFuncProv.buscarTraducao('impressao.conexao'),
        buttons: ['OK']
      });
      mno.present();
    });
  }
  requestLocalstorage()
  {
    this.infoTransportPrint = localStorage.getItem("infoTransportPrint");
    this.idLaudo = localStorage.getItem("idLaudo");
    this.infoClassificacaoPrint = localStorage.getItem("infoClassificacaoPrint");
    this.infoObsPrint = localStorage.getItem("infoObsPrint");
    this.infoEmpresa = localStorage.getItem("infoEmpresa");
  }
}
