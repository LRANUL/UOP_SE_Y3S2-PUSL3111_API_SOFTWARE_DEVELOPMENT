import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private route:Router) { }

  loginForm: FormGroup;


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['',[
        Validators.required,
        Validators.email
      ]],
      password: ['',[
        Validators.required,
        Validators.maxLength(30),
        Validators.minLength(8)
       ]]
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  submit()
  {
   this.route.navigate(['/health-inspection']);
  }

}
