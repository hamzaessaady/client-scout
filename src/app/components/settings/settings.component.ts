import { Component, OnInit } from '@angular/core';

import { Setting } from "src/app/models/setting";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  setting: Setting;

  constructor() { }

  ngOnInit(): void {
    this.setting = {
      isRegistrationAllowed: null,
      isDisableBalanceOnEdit: null,
      isDisableBalanceOnAdd: null
    }
  }

  onSave(){
    console.log(this.setting);
  }

}
