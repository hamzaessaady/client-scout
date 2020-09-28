import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';


@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.scss']
})
export class ClientEditComponent implements OnInit {

  client: Client;
  id: string;

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute,
    private router: Router,
    private flashMessage: FlashMessagesService){ }

  ngOnInit(): void {
    this.client = {
      id: null,
      fName: null,
      lName: null,
      email: null,
      phone: null,
      balance: null};
    this.id = this.route.snapshot.params['id'];
    this.clientService.getClient(this.id).subscribe(data => {
      this.client = data;
      console.log(this.client);
    });
  }

  onSubmit({valid, value}:{valid: boolean, value: Client}): void {
    if (valid) {
      value.id = this.id;
      this.clientService.updateClient(value);
      this.flashMessage.show('The client is edited successfully.', {
        cssClass: 'notification is-success py-3 is-radiusless',
        timeout: 4000
      });
      this.router.navigate([`client/${value.id}`]);
    }
    else {
      this.flashMessage.show('Please fill the form correctly before submitting.', {
        cssClass: 'notification is-danger py-3 is-radiusless',
        timeout: 4000
      });
    }
  }

}


