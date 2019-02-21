import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BrMaskerModule } from 'brmasker-ionic-3';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// import { Ionic2MaskDirective } from "ionic2-mask-directive";
// import { UppercaseDirective } from '../directives/uppercase/uppercase';
import { PrintProvider } from '../providers/print/print';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Camera } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { BLE } from '@ionic-native/ble';
import { SocialSharing } from '@ionic-native/social-sharing';
import { HttpModule } from '@angular/http';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { OpenNativeSettings } from '@ionic-native/open-native-settings';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
import { Keyboard } from '@ionic-native/keyboard';

import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { LoginPage } from '../pages/login/login';

import { EscolhaPage } from '../pages/transporte/escolha/escolha';
import { CaminhaoPage } from '../pages/transporte/tipo/caminhao/caminhao';
import { ContainerPage } from '../pages/transporte/tipo/container/container';
import { TremPage } from '../pages/transporte/tipo/trem/trem';
import { PrincipalPage } from '../pages/principal/principal';
import { PesquisaPage } from '../pages/pesquisa/pesquisa';
import { ProdutoPage } from '../pages/produto/produto';
import { ClassificadorPage } from '../pages/classificador/classificador';
import { FotoPage } from '../pages/foto/foto';
import { LaudoPage } from '../pages/laudo/laudo';
import { PrinterListModalPage } from '../pages/printer-list-modal/printer-list-modal';
import { FuncoesBasicasProvider } from '../providers/funcoes-basicas/funcoes-basicas';
import { BluetoothProvider } from '../providers/bluetooth/bluetooth';
import { DirectivesModule } from '../directives/directives.module';
import { TabsPageModule } from '../pages/tabs/tabs.module';
import { TremPageModule } from '../pages/transporte/tipo/trem/trem.module';


@NgModule({
  declarations: [
    MyApp,
    // Ionic2MaskDirective,
    // UppercaseDirective,
    // TabsPage,
    LoginPage,
    PrincipalPage,
    PesquisaPage,
    EscolhaPage,
    CaminhaoPage,
    ContainerPage,
    // TremPage,
    ProdutoPage,
    ClassificadorPage,
    FotoPage,
    LaudoPage,
    PrinterListModalPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    DirectivesModule,
    HttpClientModule,
    BrMaskerModule,
    TabsPageModule,
    TremPageModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient ]
      }
    }),
    IonicModule.forRoot(MyApp, {
      backButtonText: ''
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    LoginPage,
    PrincipalPage,
    PesquisaPage,
    EscolhaPage,
    CaminhaoPage,
    ContainerPage,
    TremPage,
    ProdutoPage,
    ClassificadorPage,
    FotoPage,
    LaudoPage,
    PrinterListModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    FuncoesBasicasProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    BarcodeScanner,
    Camera,
    FileTransfer,
    FileTransferObject,
    File,
    BLE,
    PrintProvider,
    BluetoothProvider,
    BluetoothSerial,
    SocialSharing,
    Base64ToGallery,
    // Keyboard,
    OpenNativeSettings
  ]
})
export class AppModule { }

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, "assets/lang/i18n/", ".json");
}