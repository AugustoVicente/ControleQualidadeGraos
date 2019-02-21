import { Component } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';
import { PrintProvider } from '../../providers/print/print';
import { SocialSharing } from '@ionic-native/social-sharing';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { PrinterListModalPage } from '../printer-list-modal/printer-list-modal';
import { FuncoesBasicasProvider } from '../../providers/funcoes-basicas/funcoes-basicas';
import { PrincipalPage } from '../principal/principal';
import { App } from 'ionic-angular/components/app/app';

@Component({
  selector: 'page-laudo',
  templateUrl: 'laudo.html',
})
export class LaudoPage 
{
  selectedPrinter:any=[];
  public idLaudo :any;
  constructor
  (
    public navCtrl: NavController,
    private modalCtrl:ModalController,
    private printProvider:PrintProvider,
    private alertCtrl:AlertController,
    private basicFuncProv:FuncoesBasicasProvider,
    private app:App,
    private socialSharing   : SocialSharing
  ) 
  {
    this.idLaudo = localStorage.getItem('idLaudo');
  }
  listBTDevice()
  {
    this.printProvider.searchBt().then(datalist=>
    {
      //1. Open printer select modal
      let abc=this.modalCtrl.create(PrinterListModalPage,{data:datalist});
      
      //2. Printer selected, save into this.selectedPrinter
      abc.onDidDismiss(data=>{
        this.selectedPrinter=data;

        let xyz=this.alertCtrl.create({
          title: data.name+this.basicFuncProv.buscarTraducao('impressao.selecionada'),
          buttons:['OK']
        });

        if(data==null||data==""||data==undefined)
        {

          xyz=this.alertCtrl.create({
            title: this.basicFuncProv.buscarTraducao('impressao.nselecionar')+this.basicFuncProv.buscarTraducao('impressao.selecionada'),
            buttons:['OK']
          });
        }
        xyz.present();

      });
      
      //0. Present Modal
      abc.present();

    },
    err=>
    {
      let mno=this.alertCtrl.create({
        title: this.basicFuncProv.buscarTraducao('impressao.conexao'),
        buttons:['OK']
      });
      mno.present();
    })
  }
  testPrinter()
  {
    var id=this.selectedPrinter.id;
    if(id==null||id==""||id==undefined)
    {
      let ipm=this.alertCtrl.create({
        title: this.basicFuncProv.buscarTraducao('impressao.selecionar'),
        buttons:['OK']
      });
      ipm.present();
    }
    else
    {
      this.printProvider.testPrint(id,this.idLaudo);
    }
    
  }
  voltar()
  {
    this.app.getRootNav().setRoot(PrincipalPage);
  }
  share()
  {
    this.socialSharing.shareViaWhatsApp('http://www.sbr-smartfile.com.br/trocaNota/web/TrocaNota/troca-admin/pag/gerando-pdf/pdf/' + this.idLaudo + "/pdf/" + this.idLaudo + ".pdf");
  }
}
