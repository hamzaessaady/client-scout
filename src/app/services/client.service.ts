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

  clientsCollection: AngularFirestoreCollection<Client>;
  clientDoc: AngularFirestoreDocument<Client>;
  clients: Observable<Client[]>;

  constructor(private afs: AngularFirestore) { 
    this.clientsCollection = afs.collection('clients', ref => ref.orderBy('lName', "asc"));
  }

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
}
