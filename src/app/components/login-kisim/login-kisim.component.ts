import { Component, OnInit } from "@angular/core";
import { LoginMailPassword } from "src/model/loginMailPassword";
import { AlertifyService } from "src/services/alertifyjsServices/alertify.service";
import { BackgroundService } from "src/services/backgroundServices/background.service";
import { LoginService } from "src/services/loginServices/login.service";
import { NgForm } from "@angular/forms";
import { delay } from "rxjs";

@Component({
  selector: "app-login-kisim",
  templateUrl: "./login-kisim.component.html",
  styleUrls: ["./login-kisim.component.css"],
  providers: [BackgroundService],
})
export class LoginKisimComponent implements OnInit {

  private _alertifyService: AlertifyService;
  private _loginService: LoginService;
  mailPassword: LoginMailPassword = new LoginMailPassword();

  constructor(
    alertifyService: AlertifyService,
    bgService: BackgroundService,
    loginService: LoginService
  ) {
    this._alertifyService = alertifyService;
    this._loginService = loginService;
    //bgService.resimUrl="https://cdn.pixabay.com/photo/2018/07/25/16/00/art-3561710_960_720.jpg";
    bgService.resimUrl="https://picsum.photos/1920/1080/";

    bgService.ArkaplanResminiDeğiştir();
  }

  ngOnInit(): void {}

  kayit() {
    this._alertifyService.hata(
      "Yöneticiye kayıt eklemek isteyip istemediğini sorun"
    );
  }

  giris(form: NgForm) {
    /**Kullanıcının girmiş olduğu mail ve şifre bilgilerini login servise veriyoruz */
    this._loginService.GirisEpostaSifre = this.mailPassword;

    if(this.mailPassword.email != null && this.mailPassword.password != null){
      /** Gerekli giriş işlemleri */
      this._loginService.giris();

      /** Giriş işleminden sonra sayfa yönlendirme */
      this._alertifyService.basarili("Giriş başarılı birazdan yönlendiriliyorsunuz");
      setTimeout(()=>{document.location.pathname="Ana";},1000);
      
    }/** Mail ve şifre yok ise*/
    else if( this.mailPassword.email == null && this.mailPassword.password == null){
      this._alertifyService.uyari("Geçersiz Email ve Şifre");
    }else if(this.mailPassword.password == null){
      this._alertifyService.hata("Şire girmediniz");
    }else if (this.mailPassword.email == null){
      this._alertifyService.hata("yetkisiz email");
    }
    
  }
}
