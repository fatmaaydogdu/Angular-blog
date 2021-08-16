import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  ngOnInit(): void {
  }

  username = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
  ]);

  password = new FormControl('', [
    Validators.required,
  ]);
  email = new FormControl('' , [
    Validators.required,
  ] );

  loginForm: FormGroup = this.builder.group({
    username: this.username,
    email: this.email,
    password: this.password,
  
  });

  constructor(private builder: FormBuilder) { }

  login () {
    console.log(this.loginForm.value);
    // Attempt Logging in...
  }

}
