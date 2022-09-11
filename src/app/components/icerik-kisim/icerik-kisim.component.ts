import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { asapScheduler, first } from 'rxjs';

@Component({
  selector: 'icerik',
  templateUrl: './icerik-kisim.component.html',
  styleUrls: ['./icerik-kisim.component.css']
})
export class IcerikKisimComponent implements OnInit {

  constructor() { 
  }

  ngOnInit(): void {
    this.test() //ilk çalışma
    setInterval(this.test,1000)
  }


   private test():void{
    document.getElementById("zaman")!.innerHTML=formatDate(Date.now(), "dd-MM-yyyy hh:mm:ss ","en-US");
  }
  
}
