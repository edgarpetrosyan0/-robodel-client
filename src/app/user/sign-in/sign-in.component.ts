import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthenticationService ,  private router: Router) {
    this.form = this.fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
  }

   signInUser(){
    // this.authService.signIn(
    //   this.form.get('username').value,
    //   this.form.get('password').value
    // );
    this.router.navigate(['home']);
  }

  signUp(){
    this.router.navigate(['sign-up']);
  }
}
