import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';

import { SettingService } from "../services/setting.service";

@Injectable({
  providedIn: 'root'
})
export class RegistrationGuard implements CanActivate {

  isRegAllowed: boolean;

  constructor(
    private settingService: SettingService,
    private router: Router
  ){
    this.settingService.getSettings().subscribe(settings => {
      this.isRegAllowed = settings.isRegistrationAllowed;
    });
  }

  canActivate(): boolean {
    if (!this.isRegAllowed) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
  
}
