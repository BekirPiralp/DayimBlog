import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UstKisimComponent } from './components/ust-kisim/ust-kisim.component';
import { AltKisimComponent } from './components/alt-kisim/alt-kisim.component';
import { IcerikKisimComponent } from './components/icerik-kisim/icerik-kisim.component';
import { AlertifyService } from 'src/services/alertifyjsServices/alertify.service';
import { LoginKisimComponent } from './components/login-kisim/login-kisim.component';
import { ZamanComponent } from './components/ozel/zaman/zaman.component';
import { SosyalMedyaLogoComponent } from './components/ozel/sosyal-medya-logo/sosyal-medya-logo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UstKisimComponent,
    AltKisimComponent,
    IcerikKisimComponent,
    LoginKisimComponent,
    ZamanComponent,
    SosyalMedyaLogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    AlertifyService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
