import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  SignUpForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private signup: RegistrationService) { }

  ngOnInit(): void {
    this.SignUpForm = this.formBuilder.group({
      firstName: ['',[
        Validators.required
      ]],
      middleName: [''],
      lastName: ['',[
        Validators.required
      ]],
      DOB: ['',[
        Validators.required
      ]],
      email: ['',[
        Validators.required,
        Validators.email
      ]],
      password: ['',[
        Validators.required,
        Validators.maxLength(30),
        Validators.minLength(8)
       ]],
       phone: ['',[
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(10)
      ]],
      address: ['',[
        Validators.required
      ]],
      city: ['',[
        Validators.required
      ]],
      userType: ['',[
        Validators.required
      ]],
      userName: ['']
    });
  }

  get email() {
    return this.SignUpForm.get('email');
  }

  get firstName() {
    return this.SignUpForm.get('firstName');
  }

  get lastName() {
    return this.SignUpForm.get('lastName');
  }

  get phone() {
    return this.SignUpForm.get('phone');
  }

  get address() {
    return this.SignUpForm.get('address');
  }

  get city() {
    return this.SignUpForm.get('city');
  }

  get userType() {
    return this.SignUpForm.get('userType');
  }

  get DOB() {
    return this.SignUpForm.get('DOB');
  }

  get password() {
    return this.SignUpForm.get('password');
  }

  get userName() {
    return this.SignUpForm.get('userName');
  }

  submit()
  {
   let Fname = this.SignUpForm.get('firstName').value;
   let Lname = this.SignUpForm.get('lastName').value;
   let UserName = Fname + Lname;
   this.SignUpForm.get('userName').setValue(UserName);
   console.log(this.SignUpForm.value);
   this.signup.signup(this.SignUpForm.value);
  }
}
