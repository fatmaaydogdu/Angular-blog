import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
import { ToastrService } from 'ngx-toastr';
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor (private builder: FormBuilder, private loginServiceApi: LoginService, private toastr: ToastrService, private router:Router){}

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

  loginService() {
    this.loginServiceApi.login(this.loginForm.value).subscribe((res: any) => {
      if(res.id){
        localStorage.setItem('userInfo',JSON.stringify(res));
        this.toastr.success('Giriş başarılı!');
        location.href = "/";
      }
      else{
        this.toastr.error('Giriş başarısız!');
      }
    } , error => {
      this.toastr.error('Giriş başarısız!');
    },)

  }

  login(){
    if(this.loginForm.valid){
    this.loginService();
  }
  }


}

