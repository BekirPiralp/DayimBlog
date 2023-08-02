import { Component, Input } from '@angular/core';
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
  private _goruntule:undefined|(()=>void) ;
  private _duzenle:(()=>void)|undefined;

  constructor(alertifyService:AlertifyService){
    this._alertifyService = alertifyService;
  }

  /* daha kodlanmadı diye uyarı */
  uyari(){
    this._alertifyService.hata("Daha gerekli tanımlama ve kodlamalar yapılmadı");
  }

  /**
   * @description
   * Bu method goruntuleme buttonun fonksiyonunu alır.
   * Boş geçildiği zaman varsayılan olarak uyarı methodu atanır.
   */
  @Input() public set goruntule(f:(()=>void)|undefined){
    if(f == undefined)
      f=this.uyari;
    this._goruntule=f;
  }

   /**
   * @description
   * Bu method goruntuleme buttonun fonksiyonunu getirir.
   * Değer atalı değil ise varsayılan olarak uyarı methodu bulunmaktadır.
   */
  public get goruntule():(()=>void){
    if(this._goruntule == undefined)
      this.goruntule=undefined;
    return this._goruntule!;
  }

  /**
   * @description
   * Duzenleme butonunun fonksiyonunu alır.
   * Boş geçilmesi durumunda varsayılan olarak uyari methodu atanır.
   */
  @Input() public set duzenle(f:(()=>void)|undefined){
    if(f==undefined)
      f=this.uyari;
    this._duzenle = f;
  }

  /**
   * @description
   * Duzenleme butonunun fonksiyonunu getirir.
   * Değer atalı değil ise varsayılan olarak uyari methodu bulunmaktadır.
   */
  public get duzenle():(()=>void){
    if(this._duzenle == undefined)
      this.duzenle=undefined;
    return this._duzenle!;
  }
}
