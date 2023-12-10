import { Component } from '@angular/core';
import { BackgroundService } from 'src/services/backgroundServices/background.service';

@Component({
  selector: 'app-icerik-sayfa',
  templateUrl: './icerik-sayfa.component.html',
  styleUrls: ['./icerik-sayfa.component.css'],
  providers:[BackgroundService]
})
export class IcerikSayfaComponent {

  private _bgservice:BackgroundService;

  constructor(bgService:BackgroundService){
    this._bgservice=bgService;

    this.arkaplan();
  }

  arkaplan(){
    this._bgservice.resimUrl='../../../assets/backgroundSpace2.jpg';

    this._bgservice.size="cover";

    this._bgservice.ArkaplanResminiDeğiştir();
  }
}
