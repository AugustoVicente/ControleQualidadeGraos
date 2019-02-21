import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { FuncoesBasicasProvider } from '../funcoes-basicas/funcoes-basicas';
import { BLE } from '@ionic-native/ble';
import { OpenNativeSettings } from '@ionic-native/open-native-settings';
import { ProdutoPage } from '../../pages/produto/produto';
import { Observable } from 'rxjs/Observable';
import { ActionSheetController } from 'ionic-angular';

@Injectable()
export class BluetoothProvider 
{
  public fator          : any = "";
  public macNotifyWrite1: any = "6E400001-B5A3-F393-E0A9-E50E24DCCA9E";//Notification & Write
  public macNotifyWrite2: any = "6E400002-B5A3-F393-E0A9-E50E24DCCA9E";//Write 
  public macNotifyWrite3: any = "6E400003-B5A3-F393-E0A9-E50E24DCCA9E";//Notification
  public espMac         : any;
  public buttons        : any = [];
  public isEnabled      : boolean = true;
  constructor
  (
    private alertCtrl           : AlertController, 
    private basicFuncProv       : FuncoesBasicasProvider, 
    public ble                  : BLE,
    private openNativeSettings  : OpenNativeSettings,
    public actionSheetCtrl      : ActionSheetController,
  ) 
  {}
  connectBLE(macESP,name)
  {
    this.ble.connect(macESP).subscribe(peripheralData => 
    {
      this.basicFuncProv.mostrarToast(this.basicFuncProv.buscarTraducao('ble.connectOn') + name);
      this.isEnabled = false;
    },  
    peripheralData => 
    {
      this.basicFuncProv.mostrarToast(this.basicFuncProv.buscarTraducao('ble.notPossible') + name);
      this.ble.disconnect(macESP);
      this.ble.stopNotification(macESP, this.macNotifyWrite1, this.macNotifyWrite3);
      this.isEnabled = true;
    });
  }
  scanBLE()
  {
    if(this.espMac != null && this.espMac != undefined && this.espMac != "")
    {
      this.ble.disconnect(this.espMac);
      this.buttons = [];
      var devices = [];
      this.ble.startScan([]).subscribe(device => 
      {
        devices.push(device);
      },
      error=>
      {
        this.basicFuncProv.mostrarToast(this.basicFuncProv.buscarTraducao('toast.error')+JSON.stringify(error));
      });
      setTimeout(() => 
      {
        this.ble.stopScan().then(() => 
        {
          if(devices != null || devices != [])
          {
            for (let index = 0; index < devices.length; index++) 
            {
              this.buttons.push
              ({
                text: devices[index].name,
                role: devices[index].name,
                handler: () => 
                {
                  this.connectBLE(devices[index].id,devices[index].name);
                  this.espMac = devices[index].id;
                }
              }); 
            }
            this.presentActionSheet(this.buttons);
          }
          else
          {
            this.basicFuncProv.mostrarToast(this.basicFuncProv.buscarTraducao('toast.onNoBLEFound'));
          }
        });
      }, 5000);
    }
    else
    {
      this.ble.disconnect(this.espMac);
      this.buttons = [];
      var devices = [];
      this.ble.startScan([]).subscribe(device => 
      {
        devices.push(device);
      },
      error=>
      {
        this.basicFuncProv.mostrarToast(this.basicFuncProv.buscarTraducao('toast.error')+JSON.stringify(error));
      });
      setTimeout(() => 
      {
        this.ble.stopScan().then(() => 
        {
          if(devices != null || devices != [])
          {
            for (let index = 0; index < devices.length; index++) 
            {
              this.buttons.push
              ({
                text: devices[index].name,
                role: devices[index].name,
                handler: () => 
                {
                  this.connectBLE(devices[index].id,devices[index].name);
                  this.espMac = devices[index].id;
                }
              }); 
            }
            this.presentActionSheet(this.buttons);
          }
          else
          {
            this.basicFuncProv.mostrarToast(this.basicFuncProv.buscarTraducao('toast.onNoBLEFound'));
          }
        });
      }, 5000);
    }
  }
  str2ab(str)
  {
    var buf = new ArrayBuffer(str.length*2);
    var bufView = new Uint16Array(buf);
    for (var i=0, strLen=str.length; i<strLen; i++) 
    {
      bufView[i] = str.charCodeAt(i);
    }
    return buf;
  }
  fatorToValue(address,fator)
  {
    this.ble.write(address, this.macNotifyWrite1, this.macNotifyWrite2,this.str2ab(fator)).then(dataz => 
    {
      this.basicFuncProv.mostrarToast(this.basicFuncProv.buscarTraducao('ble.fator'));
    }, 
    errx => 
    {
      alert(this.basicFuncProv.buscarTraducao('toast.error')+JSON.stringify(errx));
    });
  }
  ab2str(buf)
  {
    return String.fromCharCode.apply(null, new Uint8Array(buf));
  }
  turnOn()
  {
    this.ble.isEnabled().then
    (
      on=>
      {
        //this.basicFuncProv.mostrarToast("BlueTooth on");
      },
      off=>
      {
        this.basicFuncProv.mostrarToast("Bluetooth OFF");
        this.ble.enable().then
        (
          success=>
          {
            this.basicFuncProv.mostrarToast("Bluetooth ON");
          },
          error=>
          {
            this.basicFuncProv.mostrarToast(this.basicFuncProv.buscarTraducao('toast.error')+JSON.stringify(error));
          }
        );
      }
    );
  }
  presentActionSheet(buttons) 
  {
    let actionSheet = this.actionSheetCtrl.create
    ({
      title: this.basicFuncProv.buscarTraducao('ble.seleciona'),
      buttons: buttons
    });
    actionSheet.present();
  }

  globalVar()
  {
    return this.isEnabled;
  }
}
