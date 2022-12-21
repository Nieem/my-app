import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {


    loginForm!: FormGroup;
    loading = false;
    submitted = false;
    
    


     constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
       private authenticationService: AuthenticationService,
     
  )

  {}
    ngOnInit() {
      this.loginForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });

      
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
      this.submitted = true;
      if (this.loginForm.invalid) {
          return;
      }

      this.loading = true;
      
      this.authenticationService.login(this.f.username.value, this.f.password.value)
         
          
  }
}



    

