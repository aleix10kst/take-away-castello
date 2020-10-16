import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {HOME_PATH, LOCALS_PATH} from '../shared/constants/routes.constants';

const routes: Routes = [
  {
    path: HOME_PATH, component: HomeComponent
  },
  {
    path: LOCALS_PATH, loadChildren: () => import('../locals/locals.module').then((m) => m.LocalsModule)
  },
  {
    path: '', redirectTo: HOME_PATH, pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
