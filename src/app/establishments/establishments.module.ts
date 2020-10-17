import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EstablishmentsRoutingModule} from './establishments-routing.module';
import { EstablishmentsComponent } from './containers/establishments/establishments.component';
import {SharedModule} from '../shared/shared.module';
import { EstablishmentComponent } from './containers/establishment/establishment.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [EstablishmentsComponent, EstablishmentComponent],
  imports: [
    CommonModule,
    EstablishmentsRoutingModule,
    SharedModule,
    RouterModule
  ]
})
export class EstablishmentsModule { }
