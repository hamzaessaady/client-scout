import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afa: AngularFireAuth) { }

  login(email: string, passwd: string){
    return new Promise((resolve, reject) => {
      this.afa.auth.signInWithEmailAndPassword(email,passwd).then(
        userData => resolve(userData),
        err => reject(err)
      );
    });
  }

  getAuth() {
    return this.afa.authState.pipe(auth => auth);
  }
}
