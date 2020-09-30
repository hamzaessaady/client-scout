import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from "angular2-flash-messages";
import { Router } from "@angular/router";

import { AuthService } from "src/app/services/auth.service";
import { SettingService } from "src/app/services/setting.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  isLoginProcess: boolean;
  isRegAllowed: boolean;

  constructor(
    private authService: AuthService,
    private settingService: SettingService,
    private flashMessage: FlashMessagesService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.isLoginProcess = false;
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.router.navigate(['/']);
      }
    });
    this.settingService.getSettings().subscribe(settings => {
      this.isRegAllowed = settings.isRegistrationAllowed;
    });
  }

  onSubmit(){
    this.isLoginProcess = true;
    this.authService.login(this.email, this.password)
      .then(userData => {
        this.flashMessage.show('You are logged in successfully!', {
          cssClass: 'notification is-success py-3 is-radiusless',
          timeout: 4000
        });
        this.isLoginProcess = false;
        this.router.navigate(['/']);
      })
      .catch(err => {
        this.flashMessage.show(err.message, {
          cssClass: 'notification is-danger py-3 is-radiusless',
          timeout: 4000
        });
        this.isLoginProcess = false;
      })
  }

}
