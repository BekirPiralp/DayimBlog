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
    //bgService.resimUrl="https://cdn.pixabay.com/photo/2018/07/25/16/00/art-3561710_960_720.jpg";
    //bgService.resimUrl="https://cdn.pixabay.com/photo/2016/11/22/23/03/hardwood-1851071_960_720.jpg"
    //bgService.resimUrl="https://cdn.pixabay.com/photo/2016/03/18/15/02/ufo-1265186_960_720.jpg"
    //bgService.resimUrl="https://pixabay.com/get/ga3062b5d88ed5cb6432886964762914da8fe8aa8cce2e852289e26e8d58494989ce57856fae13ccdc4601ba1ae3f1815ddc9f66cc5fac540029deb9a10af9848417c5a1a1a340ae199e023d7b8106c0a_1920.jpg"
    //bgService.resimUrl="https://cdn.pixabay.com/photo/2017/08/15/08/23/stars-2643089_960_720.jpg"
    //bgService.resimUrl="https://cdn.pixabay.com/photo/2018/01/30/22/50/forest-3119826_960_720.jpg";//000
    //bgService.resimUrl="https://cdn.pixabay.com/photo/2018/08/21/23/29/forest-3622519_960_720.jpg"
    //bgService.resimUrl="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg"
    //bgService.resimUrl="https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?w=5000"
    //bgService.resimUrl="https://cdn.pixabay.com/photo/2018/01/31/07/36/secret-3120483_960_720.jpg"
    //bgService.resimUrl="https://cdn.pixabay.com/photo/2018/03/09/22/19/annual-rings-3212803_960_720.jpg"
    bgService.resimUrl="https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_960_720.jpg"

    bgService.ArkaplanResminiDeğiştir() 
    }

  ngOnInit(): void {
    
  }

}
