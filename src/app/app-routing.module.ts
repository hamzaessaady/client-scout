import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }     from './components/dashboard/dashboard.component';
import { LoginComponent }         from './components/login/login.component';
import { AddClientComponent }     from './components/add-client/add-client.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { ClientEditComponent }    from './components/client-edit/client-edit.component';

import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  { 
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'login',
    component: LoginComponent
  },
  { 
    path: 'client/add',
    component: AddClientComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'client/:id',
    component: ClientDetailsComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'client/edit/:id',
    component: ClientEditComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
