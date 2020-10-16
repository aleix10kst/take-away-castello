import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LocalsRoutingModule} from './locals-routing.module';
import { LocalsComponent } from './containers/locals/locals.component';
import {SharedModule} from '../shared/shared.module';
import { LocalComponent } from './containers/local/local.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [LocalsComponent, LocalComponent],
  imports: [
    CommonModule,
    LocalsRoutingModule,
    SharedModule,
    RouterModule
  ]
})
export class LocalsModule { }
