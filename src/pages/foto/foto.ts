import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Events } from 'ionic-angular/util/events';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

@Component({
  selector: 'page-foto',
  templateUrl: 'foto.html',
})
export class FotoPage 
{
  public base64Image    : string;
  private options       : CameraOptions = 
  {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  };
  constructor
  (
    public navCtrl    : NavController,
    private camera    : Camera,
    public navParams  : NavParams,
    private transfer  : FileTransfer, 
    private file      : File,
    public eventos    : Events
  ) 
  {
    this.base64Image = this.navParams.get('base64Image');
  }
  tirarFoto()
  {
    this.camera.getPicture(this.options).then((imageData) => 
    {
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, 
    (err) => 
    {
      this.base64Image = this.base64Image;
    }); 
    this.eventos.publish("foto", this.base64Image);
  }
}
