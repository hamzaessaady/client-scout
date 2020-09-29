import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from "angular2-flash-messages";
import { Router } from "@angular/router";

import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  // Attributes
  email: string;
  password: string;
  isSignupProcess: boolean;

  // Constructor and ngOnInit
  constructor(
    private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.isSignupProcess = false;
  }

  onSubmit(){
    this.isSignupProcess = true;
    this.authService.register(this.email, this.password)
      .then(result => {
        this.flashMessage.show('You are registered and logged in successfully!', {
          cssClass: 'notification is-success py-3 is-radiusless',
          timeout: 4000
        });
        this.isSignupProcess = false;
        this.router.navigate(['/']);
      })
      .catch(err => {
        this.flashMessage.show(err.message, {
          cssClass: 'notification is-danger py-3 is-radiusless',
          timeout: 4000
        });
        this.isSignupProcess = false;
      });
  }

}
