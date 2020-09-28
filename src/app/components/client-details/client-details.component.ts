import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {

  // Attributes
  id: String;
  client: Client;
  isShowModal: boolean;

  // Constructor and ngOnInit
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientService,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit(): void {
    this.isShowModal = false;
    this.id = this.route.snapshot.params['id'];
    this.clientService.getClient(this.id).subscribe(data => {
      this.client = data;
    });
  }

  onDeleteClient(): void {
    this.clientService.deleteClient(this.client);
    this.isShowModal = false;
    this.flashMessage.show('The client is deleted successfully.', {
      cssClass: 'notification is-success py-3 is-radiusless',
      timeout: 4000
    });
    this.router.navigate(['/']);

  }

}
