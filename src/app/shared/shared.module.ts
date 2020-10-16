import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LocalCardComponent} from './local-card/local-card.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [LocalCardComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [LocalCardComponent]
})
export class SharedModule { }
