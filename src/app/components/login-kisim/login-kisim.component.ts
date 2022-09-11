import { Component, OnInit } from '@angular/core';
import { BackgroundService } from 'src/services/backgroundServices/background.service';

@Component({
  selector: 'app-login-kisim',
  templateUrl: './login-kisim.component.html',
  styleUrls: ['./login-kisim.component.css'],
  providers:[
    BackgroundService,
  ]
})
export class LoginKisimComponent implements OnInit {


  constructor(bgService:BackgroundService) {
    bgService.test() 
    }

  ngOnInit(): void {
    
  }

}
