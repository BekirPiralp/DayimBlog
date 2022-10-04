import { Injectable } from '@angular/core';
import { LoginMailPassword } from 'src/model/loginMailPassword';
import { LochalStrogeService } from '../localStroge/lochal-stroge.service';

@Injectable({
  providedIn: 'root',
})

export class LoginService {
  private static _loginMailPassword?: LoginMailPassword;
  private _lochalService:LochalStrogeService;
  constructor(lochalService:LochalStrogeService) {
    this._lochalService = lochalService;
    LoginService._loginMailPassword = new LoginMailPassword;
  }

  public set GirisEpostaSifre(loginMailPassword:LoginMailPassword){
    
    LoginService._loginMailPassword = loginMailPassword;
  }

  public get GirisEpostaSifre(){
    // Sonra yazılacak
    return LoginService._loginMailPassword!;
  }

  giris(){
    // giriş işlemleri
    this._lochalService.tokenValHandler.set("Bur bir test tokenı");
  }
  cikis(){
    LoginService._loginMailPassword=undefined;
    this._lochalService.tokenValHandler.remove();
  }

  girisDurumu():boolean{    
    return this._lochalService.tokenValHandler.is();
  }
}


