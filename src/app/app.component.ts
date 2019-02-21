import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TranslateService } from '@ngx-translate/core';
import { LoginPage } from '../pages/login/login';
import { PrincipalPage } from '../pages/principal/principal';
import { LaudoPage } from '../pages/laudo/laudo';

@Component({
  templateUrl: 'app.html'
})
export class MyApp 
{
  rootPage: any;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, 
    translate: TranslateService) {
    
    let login = localStorage.getItem("login");
    let senha = localStorage.getItem("pass");

    if((login == "" || login == null) && (senha == "" || senha == null))
    {
      this.rootPage = LoginPage;
    }
    else
    {
      this.rootPage = PrincipalPage;
    }
    translate.addLangs(["en", "pt-br", "es"]);
    var linguagem = localStorage.getItem("linguagem");
    if(linguagem == null || linguagem == '')
    {
      translate.setDefaultLang('en');
    }    
    translate.setDefaultLang(linguagem);
    platform.ready().then(() => 
    {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

