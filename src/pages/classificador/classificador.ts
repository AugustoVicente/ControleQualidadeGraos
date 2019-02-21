import { Component } from '@angular/core';
import { NavController,LoadingController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FuncoesBasicasProvider } from '../../providers/funcoes-basicas/funcoes-basicas';
import { App } from 'ionic-angular/components/app/app';
import { FotoPage } from '../foto/foto';
import { PrincipalPage } from '../principal/principal';
import { ActionSheetController } from 'ionic-angular'
import { TranslateService } from '@ngx-translate/core';
import { Http, RequestOptions } from '@angular/http';
import { LaudoPage } from '../laudo/laudo';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
import { File } from '@ionic-native/file';

@Component({
  selector: 'page-classificador',
  templateUrl: 'classificador.html',
})
export class ClassificadorPage 
{
  //INFORMAÇÕES DO LAUDO
  public infoTransport    : any;
  public infoClassificacao: any;
  public infoObs          : any;
  //INFORMAÇÕES PRA IMPRIMIR
  public infoObsPrint     : any;
  //OUTRAS VARIÁVEIS
  public msg              : any;
  public observacoes      : string  = "";
  public canShare         : boolean = true;
  public msgTransporte    : string;
  public msgClassificacao : string;
  public msgTransClass    : string;
  public msgEnviar        : string;
  public invitedLaudo     : boolean = false;
  //ARRAY ONDE SERÃO ARMAZENADAS AS IMAGENS
  public images           : any     = [];
  public textButton       : any;
  public themeColor       : string  = "#4fb700";
  public themeColors      : any     = ["#821D25","#821D25","#821D25","#821D25","#821D25","#821D25","#821D25","#821D25"];
  public foto             : any;
  public fileTransfer     : FileTransferObject = this.transfer.create();
  private options         : CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
  }
  public idLaudo          : any;

  constructor
  (
    private app             : App,
    public navCtrl          : NavController,
    public navParams        : NavParams,
    private camera          : Camera,
    private basicFuncProv   : FuncoesBasicasProvider,
    public translate        : TranslateService,
    private transfer        : FileTransfer, 
    private file            : File,
    public loadingCtrl      : LoadingController,
    public http             : Http,
    public actionSheetCtrl  : ActionSheetController,
    private base64ToGallery : Base64ToGallery
  ) 
  {
    this.msgTransporte = this.basicFuncProv.buscarTraducao('toast.msgTransporte');
    this.msgClassificacao = this.basicFuncProv.buscarTraducao('toast.msgClassificacao');
    this.msgTransClass = this.basicFuncProv.buscarTraducao('toast.msgTransClass');
    this.msgEnviar = this.basicFuncProv.buscarTraducao('toast.msgEnviar');
    this.textButton = this.basicFuncProv.buscarTraducao('classificador.emitir');
  }
  exit()
  {
    this.app.getRootNav().setRoot(PrincipalPage);
  }
  novoLaudo()
  {
    this.infoTransport = JSON.parse(localStorage.getItem('infoTransport'));
    this.infoClassificacao = JSON.parse(localStorage.getItem('infoClassificacao'));
    this.infoClassificacao = localStorage.getItem('infoClassificacao');
    if (this.infoTransport == null && this.infoClassificacao == null)
    {
      this.basicFuncProv.mostrarToast(this.msgTransClass);
    }
    else if (this.infoTransport == null)
    {
      this.basicFuncProv.mostrarToast(this.msgTransporte);
    }
    else if (this.infoClassificacao == null)
    {
      this.basicFuncProv.mostrarToast(this.msgClassificacao);
    }
    if (this.infoClassificacao != null && this.infoTransport != null) 
    {
      if (this.observacoes == "")
      {
        this.observacoes = this.basicFuncProv.buscarTraducao('laudo.obs');
      }
      this.infoTransport["idProduto"] = localStorage.getItem('produto');
      this.infoTransport["obs"] = this.basicFuncProv.commentsMySQL(this.observacoes);
      this.infoTransport = JSON.stringify(this.infoTransport);
      this.infoObsPrint =
        "\n" +this.basicFuncProv.buscarTraducao('laudo.auditado') + ": " + localStorage.getItem('nome') + "\n" +
        this.basicFuncProv.buscarTraducao('classificador.obs') + ": " + this.observacoes + "\n" +
        "!---------------------\n";
      localStorage.setItem('infoObsPrint', this.infoObsPrint);
      this.basicFuncProv.mostrarToast(this.msgEnviar);
      this.enviarLaudo();
    }
  }
  // upload da imagem
  uploadFile(imageURI,number,idLaudo)
  {
    var url = encodeURI('http://www.sbr-smartfile.com.br/trocaNota/web/TrocaNota/troca-admin/pag/gerando-pdf/pdf/upload.php?idLaudo='+idLaudo);
    let loader = this.loadingCtrl.create(
    {
      content: "..."
    });
    const fileTransfer: FileTransferObject = this.transfer.create();
    let options: FileUploadOptions = 
    {
      fileKey: 'file',
      fileName: 'image'+ number +'.jpeg',
      chunkedMode: false,
      mimeType: "image/jpeg",
      headers: {}
    }
    fileTransfer.upload(imageURI, url, options)
    .then((data) => 
    {
      loader.dismiss();
      this.basicFuncProv.mostrarToast(this.basicFuncProv.buscarTraducao("optionsPhoto.photo") + number + this.basicFuncProv.buscarTraducao("optionsPhoto.sendImage"));
    }, 
    (err) => 
    {
      loader.dismiss();
      this.basicFuncProv.mostrarToast(this.basicFuncProv.buscarTraducao("optionsPhoto.sendImageError") + number);
    });
  }
  //envia o laudo para o servidor
  enviarLaudo()
  {
    if(this.invitedLaudo == false)
    {
      try 
      {
        let imageNumber = 1;
        //declarando parâmetros de conexão
        let type: string = 'application/x-www-form-urlencoded; charset=UTF-8',
        headers: any = new Headers({ 'Content-Type': type }),
        options: any = new RequestOptions({ headers: headers, search: new URLSearchParams() }),
        url: any = this.basicFuncProv.DATA_URL + '?acao=enviarLaudo&infoTransporte=' + this.infoTransport + '&infoClassificacao=' + this.infoClassificacao;
        console.log(url);
        this.http.get(url, options).map(res => res.json()).subscribe(resposta => 
        {
          for (let index = 0; index < this.images.length; index++) 
          {
            this.uploadFile(this.images[index],imageNumber,resposta);
            imageNumber++;
          }
          imageNumber = 1;
          localStorage.setItem('idLaudo', resposta);
          this.invitedLaudo = true;
          this.textButton = this.basicFuncProv.buscarTraducao('classificador.voltar');
          this.app.getRootNav().setRoot(LaudoPage);
        });
      }
      catch (errorMessage) 
      {
        //se não houver conexão de internet informa ao usuário
        this.basicFuncProv.buscarTraducao("erro");
      }
    }
    else if(this.invitedLaudo == true)
    {
      this.app.getRootNav().setRoot(LaudoPage);
    }
  }
  //pega a imagem tirada e armazena em uma array
  photo(index)
  {
    this.camera.getPicture(this.options).then(
    (imageData) => 
    {
      this.images[index] = 'data:image/jpeg;base64,' + imageData;
      this.themeColors[index] = "#4fb700";
    }, 
    (err) => 
    {
      this.images[index] = this.images[index];
    });
  }
  //manda a imagem tirada para a page FotoPage para ser visualizada
  seePhoto(index)
  {
    if (this.images[index] != undefined)
    {
      this.navCtrl.push(FotoPage, 
      { 
        base64Image: this.images[index]
      });
    }
    else
    {
      this.basicFuncProv.mostrarToast(this.basicFuncProv.buscarTraducao("optionsPhoto.seeError"));
    }
  }
  //remove a foto da array
  removePhoto(index)
  {
    this.images[index] = undefined;
    this.themeColors[index] = "#821D25";
  }
  //salva a foto tirada na galeria
  savePhoto(index)
  {
    if(this.images[index] != undefined)
    {
      var image = this.images[index].replace("data:image/jpeg;base64,", "");
      
      this.base64ToGallery.base64ToGallery(image).then(
        res => this.basicFuncProv.mostrarToast(this.basicFuncProv.buscarTraducao("optionsPhoto.saveOk")),
        err => this.basicFuncProv.mostrarToast(this.basicFuncProv.buscarTraducao("optionsPhoto.saveError"))
      );
    }
    else
    {
      this.basicFuncProv.mostrarToast(this.basicFuncProv.buscarTraducao("optionsPhoto.seeError"));
    }
  }
  optionsPhoto(index) 
  {
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: this.basicFuncProv.buscarTraducao("optionsPhoto.see"),
          handler: () => {
            this.seePhoto(index);
          }
        },
        {
          text: this.basicFuncProv.buscarTraducao("optionsPhoto.remove"),
          handler: () => {
            this.removePhoto(index);
          }
        },
        {
          text: this.basicFuncProv.buscarTraducao("optionsPhoto.save"),
          handler: () => {
            this.savePhoto(index);
          }
        }
      ]
    });
    actionSheet.present();
  }
}

