import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IcerikKisimComponent } from './components/icerik-kisim/dayııı/icerik-kisim.component';
import { LoginKisimComponent } from './components/login-kisim/login-kisim.component';
import { AnaSayfaComponent } from './components/icerik-kisim/ana-sayfa/ana-sayfa.component';
import { IcerikSayfaComponent } from './components/ozel/icerik-sayfa/icerik-sayfa.component';

const routes: Routes = [
  {path: 'Ana',component: AnaSayfaComponent},
  {path: 'Ev',component: AnaSayfaComponent},
  {path: 'Giris',component: LoginKisimComponent},
  {path: 'Icerik',component: IcerikSayfaComponent},
  {path: 'Hakkinda',component: IcerikKisimComponent},
  //{path: '**',redirectTo:'Ana', pathMatch:'full'}//component:LoginKisimComponent}
  {path: '**',redirectTo: 'Ana',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
