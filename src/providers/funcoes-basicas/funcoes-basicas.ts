import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { Http, RequestOptions } from '@angular/http';
import { PrincipalPage } from '../../pages/principal/principal';
import moment from 'moment';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class FuncoesBasicasProvider 
{
  private data         :       any;
  private msg          :       any;
  private load         :       any;
  public  DATA_URL     :       string = "http://sbr-smartfile.com.br/trocaNota/webservice.php";
  public  produto      :       any;
  private loadSpinner  :       any;
  constructor
  (
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public http: Http,
    public translate:TranslateService
  )
  {
  }
  //função que retorna a data atual
  getDateToday()
  {
    var dataNow = moment().format('YYYY-MM-DD');
    return dataNow;
  }
  //função que mostra uma mensagem por toast
  mostrarToast(msg)
  {
    if(msg === 'erro')
    {
      this.translate.get('toast.errorMessage').subscribe(
      (res: string) =>
      {
        msg = res;
      });
    }
    let toast = this.toastCtrl.create(
    {
      message: msg,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
  //função que mostra um load na tela
  mostrarLoad()
  {
    this.loadSpinner = this.loadingCtrl.create({
      spinner: 'crescent',
      dismissOnPageChange : true
    });
    this.loadSpinner.present();
  }
  exitLoad()
  {
    this.loadSpinner.dismiss();
  }
  mostrarLoadBLESearch()
  {
    this.translate.get('ble.search').subscribe(
    (res: string) => 
    {
      this.load = res;
    }); 
    let loader = this.loadingCtrl.create({
      content: this.load,
      duration: 5000
    });
    loader.present();
  }
  //função que transforma uma data dateTime para dd/mm/aaaa
  transformaData()
  {
    var dataNow;
    if(localStorage.getItem("linguagem") == 'en')
      dataNow = moment().format('MM/DD/YYYY');
    else
      dataNow = moment().format('DD/MM/YYYY');
    return dataNow;
  }
  buscarTraducao(path)
  {
    this.translate.get(path).subscribe(
    (res: string) => 
    {
      this. msg= res;
    });
    return this.msg;
  }
  commentsMySQL(stringValue)
  {
    return "'" + stringValue + "'";
  }
  selectOptions(subTitle, mode)
  {
    return {
      subTitle: this.buscarTraducao(subTitle)
    };
  }
}
