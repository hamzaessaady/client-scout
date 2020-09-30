import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

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

  settings: ReplaySubject<Setting> = new ReplaySubject<Setting>();

  constructor() { 
    if(localStorage.getItem('clientscout') == null){
      this.settings.next(DEFAULT_SETTINGS);
      localStorage.setItem('clientscout', JSON.stringify({settings: this.settings}));
    } else {
      this.settings.next(JSON.parse(localStorage.getItem('clientscout')).settings);
    }
  }

  getSettings(): Observable<Setting> {
    return this.settings;
  }

  saveSettings(setting: Setting){
    this.settings.next(setting);
    this.settings.subscribe(settings => {
      localStorage.setItem('clientscout', JSON.stringify({settings: settings}));
    })
  }
}
