import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }     from './components/dashboard/dashboard.component';
import { LoginComponent }         from './components/login/login.component';
import { AddClientComponent }     from './components/add-client/add-client.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { ClientEditComponent }    from './components/client-edit/client-edit.component';
import { SignupComponent }        from "./components/signup/signup.component";
import { SettingsComponent }        from "./components/settings/settings.component";

import { AuthGuard } from "./guards/auth.guard";
import { RegistrationGuard } from "./guards/registration.guard";

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
    path: 'register',
    component: SignupComponent,
    canActivate: [RegistrationGuard]
  },
  { 
    path: 'settings',
    component: SettingsComponent,
    canActivate: [AuthGuard]
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
