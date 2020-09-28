import { Injectable } from '@angular/core';
import { AngularFirestore }           from 'angularfire2/firestore';
import { AngularFirestoreCollection}  from 'angularfire2/firestore';
import { AngularFirestoreDocument }   from 'angularfire2/firestore';
import { Observable }   from 'rxjs';
import { map } from 'rxjs/operators';

import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  // ATTRIBUTES
  clientsCollection: AngularFirestoreCollection<Client>;
  clientDoc: AngularFirestoreDocument<Client>;
  clients: Observable<Client[]>;
  client: Observable<Client>;

  // CONSTRUCTOR
  constructor(private afs: AngularFirestore) { 
    this.clientsCollection = afs.collection('client', ref => ref.orderBy('lName', "asc"));
  }

  // GET all clients
  getClients(): Observable<Client[]> {
    this.clients = this.clientsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Client;
        data.id = a.payload.doc.id;
        return data;
      }))
    );
  
    return this.clients;
  }

  // GET one Client
  getClient(id: String): Observable<Client> {
    this.clientDoc = this.afs.doc<Client>(`client/${id}`);
    this.client = this.clientDoc.snapshotChanges().pipe(
      map(action => {
        if (action.payload.exists) {
          const data = action.payload.data() as Client;
          data.id = action.payload.id;
          return data;
        }
        return null;
      })
    );

    return this.client;
  }

  // ADD client
  addClient(client: Client): void {
    this.clientsCollection.add(client);
  }

  // UPDATE client
  updateClient(client: Client): void {
    this.clientDoc = this.afs.doc<Client>(`client/${client.id}`);
    this.clientDoc.update(client);
  }
}
