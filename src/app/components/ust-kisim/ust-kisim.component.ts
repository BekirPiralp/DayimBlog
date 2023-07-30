import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from 'src/services/loginServices/login.service';

@Component({
  selector: 'ust',
  templateUrl: './ust-kisim.component.html',
  styleUrls: ['./ust-kisim.component.css'],
  providers:[
    LoginService
  ]
})
export class UstKisimComponent implements OnInit {

  private _router;
  _girisServisi:LoginService;
  
  constructor(router:Router,girisServisi:LoginService) { 
    this._router=router;
    this._girisServisi=girisServisi;
  }

  ngOnInit(): void {
  }

  ifGiris(){
    return this._girisServisi.girisDurumu();
    //return this._router.url == "/giris";
  }
  cikis(){
    this._girisServisi.cikis();
  }
}
