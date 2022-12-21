import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent {
  

  constructor (private router: Router,public authservice:AuthenticationService){}
    
  

  
  ngOnInit() {
    if((this.authservice.isLoggedIn$.value==false)){
      this.router.navigate(['/login']);
      
    }
  }



}
