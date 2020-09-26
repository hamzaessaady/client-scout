import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';


@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {

  client: Client;

  constructor(
    private clientService: ClientService,
    private router: Router,
    private flashMessage: FlashMessagesService){ }

  ngOnInit(): void {
    this.client = {
      fName: null,
      lName: null,
      email: null,
      phone: null,
      balance: null,
    }
  }

  onSubmit({valid, value}:{valid: boolean, value: Client}): void {
    if (valid) {
      this.clientService.addClient(value);
      this.router.navigate(['/']);
      this.flashMessage.show('The new client is added successfully.', {
        cssClass: 'notification is-success py-3 is-radiusless',
        timeout: 4000
      });
    }
    else {
      this.flashMessage.show('Please fill the form correctly before submitting.', {
        cssClass: 'notification is-danger py-3 is-radiusless',
        timeout: 4000
      });
    }
  }

}
