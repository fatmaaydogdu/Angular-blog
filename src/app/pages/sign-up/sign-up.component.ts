import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { SignupService } from 'src/app/services/signup/signup.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  constructor(private builder: FormBuilder, private signupService: SignupService, private toastr: ToastrService) { }
  showToatr() {
    this.toastr.success('Kayıt başarılı!');
  }

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

  testService() {
    this.signupService.postTest(this.signupForm.value).subscribe((res: any) => {
      console.log(res);
    })
  }


  signup() {
    this.testService();
  }

}
