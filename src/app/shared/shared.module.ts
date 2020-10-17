import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EstablishmentCardComponent} from './establishment-card/establishment-card.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [EstablishmentCardComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [EstablishmentCardComponent]
})
export class SharedModule { }
