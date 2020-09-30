import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ClientService } from 'src/app/services/client.service';
import { Client } from 'src/app/models/client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  clients: Client[];
  isLoaded: boolean;
  @Output() totalBalanceEvent: EventEmitter<number> = new EventEmitter();

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.isLoaded = false;
    this.clientService.getClients().subscribe(data => {
      this.clients = data;
      this.totalBalanceEvent.emit(this.calcTotalBalance());
      this.isLoaded = true;
    });
  }

  calcTotalBalance(): number {
    return this.clients.reduce((total, client) =>{
      return total + client.balance
    }, 0);
  }

}
