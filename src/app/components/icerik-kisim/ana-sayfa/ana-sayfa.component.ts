import { Component,OnInit } from '@angular/core';
import { BackgroundService } from 'src/services/backgroundServices/background.service';


@Component({
  selector: 'ana-sayfa',
  templateUrl: './ana-sayfa.component.html',
  styleUrls: ['./ana-sayfa.component.css'],
  providers:[
    BackgroundService
  ]
})
export class AnaSayfaComponent implements OnInit {
  _backgroundService:BackgroundService;
  constructor(bgService:BackgroundService){
    this._backgroundService=bgService;

  }
  ngOnInit(): void {
    this._backgroundService.resimUrl="../../../assets/backgroundWinter2.jpg";
    //this._backgroundService.resimUrl="../../../assets/backgroundWinter.jpg";
    //this._backgroundService.resimUrl="../../../assets/backgroundSpace2.jpg";
    this._backgroundService.ArkaplanResminiDeğiştir();
  }

  git(){
    document.location.href="Icerik";
  }
}

