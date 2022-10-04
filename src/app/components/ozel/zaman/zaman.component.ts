import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-zaman',
  templateUrl: './zaman.component.html',
  styleUrls: ['./zaman.component.css']
})
export class ZamanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.zamanSet();//ilk set;
    setInterval(this.zamanSet,1000)
  }

  private zamanSet(){
    if(document.getElementById("zaman"))
    document.getElementById("zaman")!.innerHTML=formatDate(Date.now(), "dd-MM-yyyy hh:mm:ss ","en-US");
  }
}
