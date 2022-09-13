import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ust',
  templateUrl: './ust-kisim.component.html',
  styleUrls: ['./ust-kisim.component.css']
})
export class UstKisimComponent implements OnInit {

  constructor(router:Router) { 
    this._router=router;
  }

  private _router;

  ngOnInit(): void {
  }
  ifGiris(){
    return this._router.url == "/giris";
  }
}
