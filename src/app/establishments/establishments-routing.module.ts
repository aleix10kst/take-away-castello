import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {EstablishmentsComponent} from './containers/establishments/establishments.component';
import {EstablishmentComponent} from './containers/establishment/establishment.component';

const routes: Routes = [
  {
    path: '', component: EstablishmentsComponent
  },
  {
    path: ':id', component: EstablishmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class EstablishmentsRoutingModule { }
