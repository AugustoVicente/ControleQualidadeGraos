import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, RequestOptions } from '@angular/http';
import { URLSearchParams } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
import { TranslateService } from '@ngx-translate/core';
import { PrincipalPage } from '../principal/principal';
import { FuncoesBasicasProvider } from '../../providers/funcoes-basicas/funcoes-basicas';
@Component({
  selector: 'login-home',
  templateUrl: 'login.html'
})
export class LoginPage 
{
  public login  : any;
  public pass   : any;
  public msg    : any;
  constructor
  (
    public navCtrl        : NavController,
    public funcBasicProv  : FuncoesBasicasProvider,
    public http           : Http,
    public translate      : TranslateService
  ) {}
  //FUNÇÃO QUE FAZ LOGIN
  logar() 
  {
    try 
    {
      let type: string = "application/x-www-form-urlencoded; charset=UTF-8",
          headers: any = new Headers({ 'Content-Type': type }),
          options: any = new RequestOptions({ headers: headers, search: new URLSearchParams() }),
          url: any = this.funcBasicProv.DATA_URL + "?acao=login&login=" + this.login + "&senha=" + this.pass;

      return this.http.get(url, options).map(res => res.json()).subscribe(
        id => 
        {
          if (id === 'erro') 
          {
            this.funcBasicProv.mostrarToast(this.funcBasicProv.buscarTraducao("toast.login"));          
          }
          else
          {
            localStorage.setItem("login", this.login);
            localStorage.setItem('pass', this.pass);
            localStorage.setItem("idUser", id[0].idUsuario);
            localStorage.setItem('nome', id[0].nome);
            this.navCtrl.push(PrincipalPage);
          }
      });
    }
    catch (errorMessage) 
    {
      this.funcBasicProv.exitLoad();
      this.funcBasicProv.mostrarToast('erro');
    }
  }
  //SETAR LINGUAGEM
  select(ln)
  {
    this.translate.setDefaultLang(ln);
    localStorage.setItem("linguagem", ln);
  }
}
