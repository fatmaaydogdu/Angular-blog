import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { SignupService } from 'src/app/services/signup/signup.service';
import { ToastrService } from 'ngx-toastr';
import {Router} from "@angular/router";



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  constructor(private builder: FormBuilder, private signupServiceApi: SignupService, private toastr: ToastrService, private router:Router
    ) { }

  ngOnInit(): void { }



  username = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
  ]);

  password = new FormControl('', [
    Validators.required,
  ]);
  email = new FormControl('', [
    Validators.required,
  ]);

  signupForm: FormGroup = this.builder.group({
    username: this.username,
    email: this.email,
    password: this.password,

  });

  signupService() {
    this.signupServiceApi.signup(this.signupForm.value).subscribe((res: any) => {
      console.log(res);
      if(res.id){
        this.toastr.success('Kayıt başarılı!');
        this.router.navigate(['/giris']);

      }
      else{
        this.toastr.error('Kayıt başarısız!');
      }
    } , error => {
      this.toastr.error('Kayıt başarısız!');
    },)
  }


  signup() {
    if(this.signupForm.valid){
      this.signupService();
    }
    
  }

}
