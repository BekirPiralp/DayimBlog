import { Component, OnInit} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AlertifyService } from 'src/services/alertifyjsServices/alertify.service';
import { LoginService } from 'src/services/loginServices/login.service';
@Component({
  selector: 'ust',
  templateUrl: './ust-kisim.component.html',
  styleUrls: ['./ust-kisim.component.css'],
  providers:[
    LoginService,
    AlertifyService
  ]
})
export class UstKisimComponent implements OnInit {

  private _router;
  _girisServisi:LoginService;
  private _alertifyService:AlertifyService;
  
  constructor(router:Router,girisServisi:LoginService,alertifyService:AlertifyService) { 
    this._router=router;
    this._girisServisi=girisServisi;
    this._alertifyService=alertifyService;
  }

  ngOnInit(): void {
    /*this.aktiflikAyari();*/
  }

  /* actif olmayı ayarlar şuan geçerli değil*/
  aktiflikAyari(){
    let collection =document.getElementsByClassName("nav-link");
    for(let i=0;i<collection.length;i++){
      
      let item = collection[i];
      item.addEventListener("click",()=>{
      item.classList.add("active");
        for(let x=0; x<collection.length;x++){
          
          if(x!=i){
            let otherItem = collection[x];
            otherItem.classList.remove("active");
          }
        }
      })
    }
  }

  ifGiris(){
    return this._girisServisi.girisDurumu();
    //return this._router.url == "/giris";
  }
  cikis(){
    this._alertifyService.uyari("Çıkış Başarılı");
    setTimeout(()=>{},100);
    this._girisServisi.cikis();
    return this._router.url == "Ana";
  }

  

}
