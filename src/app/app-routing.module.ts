import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }     from './components/dashboard/dashboard.component';
import { LoginComponent }         from './components/login/login.component';
import { AddClientComponent }     from './components/add-client/add-client.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'login', component: LoginComponent},
  { path: 'client/add', component: AddClientComponent},
  { path: 'client/:id', component: ClientDetailsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
