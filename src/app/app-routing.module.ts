import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IcerikKisimComponent } from './components/icerik-kisim/icerik-kisim.component';
import { LoginKisimComponent } from './components/login-kisim/login-kisim.component';

const routes: Routes = [
  {path: '',component: IcerikKisimComponent},
  {path: 'giris',component: LoginKisimComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
