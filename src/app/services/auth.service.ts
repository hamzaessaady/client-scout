import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afa: AngularFireAuth) { }

  // LOGIN
  login(email: string, passwd: string){
    return new Promise((resolve, reject) => {
      this.afa.auth.signInWithEmailAndPassword(email,passwd).then(
        userData => resolve(userData),
        err => reject(err)
      );
    });
  }

  // LOGOUT
  logout(): void {
    this.afa.auth.signOut();
  }

  // REGISTER
  register(email: string, passwd: string){
    return new Promise((resolve, reject) => {
      this.afa.auth.createUserWithEmailAndPassword(email,passwd).then(
        userData => resolve(userData),
        err => reject(err)
      );
    });
  }

  // GET AUTH
  getAuth() {
    return this.afa.authState.pipe(auth => auth);
  }

}
