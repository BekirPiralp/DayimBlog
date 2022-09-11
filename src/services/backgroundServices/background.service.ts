import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable()
export class BackgroundService {

  /* --renk-benim:rgba(255, 255, 255, 0.200);
    --renk-benim2:rgba(0, 0, 0, 0.500);
    --bg-ana-resim:url('./assets/backgroundSukenarı.jpg');
    --bg-ana: linear-gradient(var(--renk-benim2),var(--renk-benim)),var(--bg-ana-resim);
    background:  var(--bg-ana);*/
  constructor(sanitizer: DomSanitizer) {
    this._santizer=sanitizer;
  }

  _santizer;
  renk = 'rgba(255, 255, 255, 0.200)';
  renk2 = 'var(rgba(0, 0, 0, 0.500))';
  private _derece:string='90deg';
  set dereceSet(derece:number){
    this._derece= derece.toString()+'deg';
  }
  get dereceGet(){
    return this._derece;
  }
  resimUrl="/src/assets/backgroundRihtim.jpg";
  private _resim=`url("${this.resimUrl}")`;
  private _rsm = "url('https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?w=2000')";
  private _background:string="linear-gradient(90deg,var(--rnk1),var(--rnk2),var(--rnk2),var(--rnk1)),var(--test)";

  test(){
    console.log(this._background)
    try{
      document.body.style.cssText+="--test:"+this._rsm;
      document.body.style.cssText+="--rnk1: #ffffff9f";
      document.body.style.cssText+="--rnk2: #0000009f"
      document.body.style.cssText+="--tst:"+this._background;
      document.body.style.background="var(--tst)";
    }catch(err){
      console.log(err);
    }
  }
}
