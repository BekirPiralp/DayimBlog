import { Injectable } from '@angular/core';
import { LoginMailPassword } from 'src/model/loginMailPassword';

@Injectable({
  providedIn: 'root',
})

export class LoginService {
  private static _loginMailPassword?: LoginMailPassword;
  constructor() {
    
  }

  public set GirisEpostaSifre(loginMailPassword:LoginMailPassword){
    
    LoginService._loginMailPassword = loginMailPassword;
  }

  public get GirisEpostaSifre(){
    // Sonra yazılacak
    return LoginService._loginMailPassword!;
  }

  giris(){
  }
  cikis(){
    LoginService._loginMailPassword=undefined;
    
  }

  girisDurumu():boolean{    
    if(this.GirisEpostaSifre != undefined )
    return true;
    else
    return false;
  }
}


const TOKEN="token";
const USER_MAIL="userMail";

