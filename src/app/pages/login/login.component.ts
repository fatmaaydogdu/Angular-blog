import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor (private builder: FormBuilder, private loginService: LoginService){}

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

  testService() {
    this.loginService.postTest(this.loginForm.value).subscribe((res: any)=> {
      console.log(res);
    })   
  }

  

  login () {
    console.log(this.loginForm.value);
    this.testService();
    // Attempt Logging in...
  }

}

