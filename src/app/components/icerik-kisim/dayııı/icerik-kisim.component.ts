import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { asapScheduler, first } from 'rxjs';
import { BackgroundService } from 'src/services/backgroundServices/background.service';

@Component({
  selector: 'icerik',
  templateUrl: './icerik-kisim.component.html',
  styleUrls: ['./icerik-kisim.component.css'],
  providers:[BackgroundService]
})
export class IcerikKisimComponent implements OnInit {

  constructor(bgService:BackgroundService) {
    bgService.resimUrl= "backgroundSukenarı.jpg";
    bgService.size="cover";
    bgService.ArkaplanResminiDeğiştir()
  }

  ngOnInit(): void {
  }
    
}
