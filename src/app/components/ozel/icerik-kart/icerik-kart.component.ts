import { Component } from '@angular/core';
import { AlertifyService } from 'src/services/alertifyjsServices/alertify.service';

@Component({
  selector: 'icerik-kart',
  templateUrl: './icerik-kart.component.html',
  styleUrls: ['./icerik-kart.component.css'],
  providers:[
    AlertifyService
  ]
})
export class IcerikKartComponent {
  private _alertifyService:AlertifyService;
  constructor(alertifyService:AlertifyService){
    this._alertifyService = alertifyService;
  }

  /* daha kodlanmadı diye uyarı */
  uyari(){
    this._alertifyService.hata("Daha gerekli tanımlama ve kodlamalar yapılmadı");
  }
}
