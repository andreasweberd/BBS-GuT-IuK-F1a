import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/home/home.component';
import { DeliveryMapComponent } from '../delivery-map/delivery-map.component';
import { NotfoundpageComponent } from 'src/notfoundpage/notfoundpage.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'tracking',
    component: DeliveryMapComponent
  },
  {
    path: '**',
    component: NotfoundpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
