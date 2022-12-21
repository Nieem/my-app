import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';

import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
      public isLoggedIn$!: BehaviorSubject<boolean>;

      constructor( private router: Router) {
      const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
      this.isLoggedIn$ = new BehaviorSubject(isLoggedIn);
      
    }

   

    login(username: any, password: any) {
       
                localStorage.setItem('currentUser', username);
                localStorage.setItem('loggedIn', 'true');
                this.isLoggedIn$.next(true);
                 this.router.navigate(['/dashboard']);
            };
    

     
    logout() {
  
          localStorage.removeItem('currentUser');
          localStorage.setItem('loggedIn', 'false');
          this.isLoggedIn$.next(false);
          this.router.navigate(['/login']);
            }

}


