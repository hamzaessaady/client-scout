import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from "angular2-flash-messages";

import { Setting } from "src/app/models/setting";
import { SettingService } from "src/app/services/setting.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  setting: Setting;

  constructor(
    private settingService: SettingService,
    private router: Router,
    private flashMessage: FlashMessagesService,
  ) { }

  ngOnInit(): void {
    this.settingService.getSettings().subscribe(data => this.setting = data);
  }

  onSave(){
    this.settingService.saveSettings(this.setting);
    this.flashMessage.show('Settings are saved successfully!', {
      cssClass: 'notification is-success py-3 is-radiusless',
      timeout: 4000
    });
    this.router.navigate(['/']);
  }

}
