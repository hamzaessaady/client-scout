import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Setting } from "../models/setting";

const DEFAULT_SETTINGS: Setting = {
  isRegistrationAllowed: false,
  isDisableBalanceOnEdit: false,
  isDisableBalanceOnAdd: false
}

@Injectable({
  providedIn: 'root'
})

export class SettingService {

  settings: Setting;

  constructor() { 
    if(localStorage.getItem('clientscout') == null){
      this.settings = DEFAULT_SETTINGS;
      localStorage.setItem('clientscout', JSON.stringify({settings: this.settings}));
    } else {
      this.settings = JSON.parse(localStorage.getItem('clientscout')).settings;
    }
  }

  getSettings(): Observable<Setting> {
    return of(this.settings);
  }

  saveSettings(setting: Setting){
    this.settings = setting;
    localStorage.setItem('clientscout', JSON.stringify({settings: this.settings}));
  }
}
