import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor (private builder: FormBuilder, private loginService: LoginService, private toastr: ToastrService){}

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
    this.loginService.login(this.loginForm.value).subscribe((res: any) => {
      console.log(res);
      if(res.id){
        this.toastr.success('Giriş başarılı!');

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
    this.testService();
  }
  }


}

