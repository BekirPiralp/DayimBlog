import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'sosyal-medya-logo',
  templateUrl: './sosyal-medya-logo.component.html',
  styleUrls: ['./sosyal-medya-logo.component.css']
})
export class SosyalMedyaLogoComponent implements OnInit {

  private _instagramURL:string | undefined ="#";
  private _twitterURL:string | undefined ="#";
  private _facebookURL:string | undefined ="#";
  constructor() { }

  ngOnInit(): void {
    //console.log(this.asd);
  }
  
  @Input() set instagramUrl(url : string | undefined) {
    console.log(url);
    if(url == undefined)
      url="#";
    this._instagramURL = url;
  }

  @Input() set twitterUrl (url:string | undefined){
    if(url == undefined)
      url="#";
    this._twitterURL = url;
  }

  @Input() set facebookUrl (url:string | undefined){
    if(url == undefined)
      url="#";
    this._facebookURL = url;
  }
  
  public get instagramUrl(): string {

    return this._instagramURL!;
  }

  public get twitterUrl ():string{
    return this._twitterURL!;
  }

  public get facebookUrl (): string{
    
    return this._facebookURL!;
  }
  
}
