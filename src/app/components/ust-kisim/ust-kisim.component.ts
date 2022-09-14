import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/services/loginServices/login.service';

@Component({
  selector: 'ust',
  templateUrl: './ust-kisim.component.html',
  styleUrls: ['./ust-kisim.component.css'],
  providers:[
  ]
})
export class UstKisimComponent implements OnInit {

  constructor(router:Router,girişServisi:LoginService) { 
    this._router=router;
    this._girisServisi=girişServisi;
  }

  private _router;
  protected _girisServisi:LoginService;

  ngOnInit(): void {
  }
  ifGiris(){
    return this._girisServisi.girisDurumu();
    //return this._router.url == "/giris";
  }
}
