import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LocalsComponent} from './containers/locals/locals.component';
import {LocalComponent} from './containers/local/local.component';

const routes: Routes = [
  {
    path: '', component: LocalsComponent
  },
  {
    path: ':id', component: LocalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class LocalsRoutingModule { }
