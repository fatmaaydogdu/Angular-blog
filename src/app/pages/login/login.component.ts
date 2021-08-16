import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {
  }

  password = new FormControl('', [
    Validators.required,
  ]);
  email = new FormControl('' , [
    Validators.required,
  ] );

  loginForm: FormGroup = this.builder.group({
    email: this.email,
    password: this.password,
  
  });

  constructor(private builder: FormBuilder) { }

  login () {
    console.log(this.loginForm.value);
    // Attempt Logging in...
  }

}

