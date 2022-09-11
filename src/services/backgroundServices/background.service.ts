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

    this.rnk="";
    this.renkler= [new Renk(0,0,0,0.8),new Renk(0,0,0,0.6),new Renk(255,255,255,0.2),new Renk(255,255,255,0.2),new Renk(0,0,0,0.6),new Renk(0,0,0,0.8)];
    this.renkler.forEach((val)=>{
      this.rnk +=val.toString+",";
    })

    this.rnk=this.rnk.substring(0,this.rnk.length -1);
    this.dereceSet=90;
    this.resimUrl="https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?w=2000";
    this._resim="";
    this._background="";
  }

  _santizer;
  private renkler:Renk[];
  private _derece:string='90deg';
  set dereceSet(derece:number){
    this._derece= derece.toString()+'deg';
  }
  get dereceGet(){
    return this._derece;
  }
  resimUrl:string;//= document.baseURI+"/src/assets/backgroundRihtim.jpg";
  private _resim;
  private rnk:string;
  private _background:string;

  ArkaplanResminiDeğiştir(){
    this._resim=`url('${this.resimUrl}')`;
    this._background=`linear-gradient(${this._derece},${this.rnk}),${this._resim} no-repeat `;
      document.body.style.background=this._background
      document.body.style.backgroundSize= "100% 100%"
  }
}

export class Renk{
  /**
   *
   */
  constructor(...args: [kırmızı?: number, mavi?: number, yeşil?: number, opaklık?: number]) {
    this.kırmızı=args[0]!
    this.mavi=args[1]!
    this.yeşil=args[2]!
    this.opaklık=args[3]!
  }


  private _kırmızı:number=0;
  private _mavi:number=0;
  private _yeşil:number=0;
  private _opaklık:number=1;

  public set kırmızı(val:number){
    this._kırmızı=this.sett(val);
  }
  public set mavi(val:number){
    this._mavi=this.sett(val);
  }
  public set yeşil(val:number){
    this._yeşil=this.sett(val);
  }

  public set opaklık(val:number){
    if(0<=val && 1>=val )
    this._opaklık=val;
    else if(val<0)
    this._opaklık=0;
    else
    this._opaklık=1;
  }

  public get kırmızı(){
    return this._kırmızı;
  }
  
  public get mavi(){
    return this._mavi;
  }
  public get yeşil(){
    return this._yeşil;
  }

  public get opaklık(){
    return this._opaklık;
  }

  private sett(val:number){
    if(val>0){
      if(val>255)
      return 255;
      else
      return val;
    }else{
      return 0;
    }
  }

  public get toString():string{
    return `rgba(${this._kırmızı},${this._yeşil},${this._mavi},${this._opaklık})`;
  }
}
