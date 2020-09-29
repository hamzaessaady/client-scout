import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private afa: AngularFireAuth
  ){}

  canActivate(): Observable<boolean> {
    return this.afa.authState.pipe(
      map(auth => {
        if (!auth) {
          this.router.navigate(['/login']);
          return false;
        }
        return true;
      })
    );
  }
  
}
