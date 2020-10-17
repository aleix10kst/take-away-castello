import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {CONTACTE_PATH, HOME_PATH, ESTABLISHMENTS_PATH} from '../shared/constants/routes.constants';
import {ContactComponent} from '../containers/contact/contact.component';

const routes: Routes = [
  {
    path: HOME_PATH, component: HomeComponent
  },
  {
    path: ESTABLISHMENTS_PATH, loadChildren: () => import('../establishments/establishments.module').then((m) => m.EstablishmentsModule)
  },
  {
    path: CONTACTE_PATH, component: ContactComponent
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
