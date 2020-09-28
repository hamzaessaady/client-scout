import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }     from './components/dashboard/dashboard.component';
import { LoginComponent }         from './components/login/login.component';
import { AddClientComponent }     from './components/add-client/add-client.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { ClientEditComponent } from './components/client-edit/client-edit.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'login', component: LoginComponent},
  { path: 'client/add', component: AddClientComponent},
  { path: 'client/:id', component: ClientDetailsComponent},
  { path: 'client/edit/:id', component: ClientEditComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
