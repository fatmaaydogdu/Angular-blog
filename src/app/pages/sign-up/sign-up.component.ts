import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { SignupService } from 'src/app/services/signup/signup.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  constructor(private builder: FormBuilder, private signupService: SignupService) { }


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

  testService() {
    this.signupService.postTest(this.loginForm.value).subscribe((res: any)=> {
      console.log(res);
    })   
  }


  login () {
    this.testService();
  }

}
