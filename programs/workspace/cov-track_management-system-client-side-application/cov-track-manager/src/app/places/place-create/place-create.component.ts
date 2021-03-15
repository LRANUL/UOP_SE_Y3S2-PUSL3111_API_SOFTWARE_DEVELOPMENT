import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-place-create',
  templateUrl: './place-create.component.html',
  styleUrls: ['./place-create.component.css']
})
export class PlaceCreateComponent implements OnInit {

  createAgentForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  code;

  ngOnInit(): void {
    this.createAgentForm = this.formBuilder.group({
      organizationName: ['',[
        Validators.required
      ]],
      organizationType: ['',[
        Validators.required
      ]],
      organizationAddress: ['',[
        Validators.required
      ]],
      organizationSector: ['',[
        Validators.required
      ]],
      ownerFirstName: ['',[
        Validators.required
      ]],
      ownerMiddleName: [''],
      ownerLastName: ['',[
        Validators.required
      ]],
      DOB: ['',[
        Validators.required
      ]],
      ownerNIC: ['',[
        Validators.required
      ]],
      organizationEmail: ['',[
        Validators.required,
        Validators.email
      ]],
      personalEmail: ['',[
        Validators.required,
        Validators.email
      ]],
      password: ['',[
        Validators.required,
        Validators.maxLength(30),
        Validators.minLength(8)
       ]],
       confirmPassword: ['',[
        Validators.required,
        Validators.maxLength(30),
        Validators.minLength(8)
       ]],
       organizationPhone: ['',[
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(10)
      ]],
      personalPhone: ['',[
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(10)
      ]],
      QRcode: ['']
    });
  }

  qrCodeLoad()
  {
    let companyname = this.createAgentForm.get('organizationName').value;
    console.log(companyname);
    let random = Math.floor(Math.random() * (999999 - 100000)) + 100000;
    let val = random.toString();
    this.code = companyname + val;
    console.log(this.code);
    this.createAgentForm.patchValue({
      QRcode: this.code,
    });
  }


  get organizationName() {
    return this.createAgentForm.get('organizationName');
  }
  get organizationType() {
    return this.createAgentForm.get('organizationType');
  }
  get organizationAddress() {
    return this.createAgentForm.get('organizationAddress');
  }
  get organizationSector() {
    return this.createAgentForm.get('organizationSector');
  }
  get ownerFirstName() {
    return this.createAgentForm.get('ownerFirstName');
  }

  get ownerMiddleName() {
    return this.createAgentForm.get('ownerFirstName');
  }

  get ownerLastName() {
    return this.createAgentForm.get('ownerLastName');
  }


  get DOB() {
    return this.createAgentForm.get('DOB');
  }

  get ownerNIC() {
    return this.createAgentForm.get('ownerNIC');
  }

  get organizationEmail() {
    return this.createAgentForm.get('organizationEmail');
  }

  get password() {
    return this.createAgentForm.get('password');
  }

  get confirmPassword() {
    return this.createAgentForm.get('confirmPassword');
  }
  get organizationPhone() {
    return this.createAgentForm.get('organizationPhone');
  }
  get personalPhone() {
    return this.createAgentForm.get('personalPhone');
  }

  get personalEmail() {
    return this.createAgentForm.get('organizationEmail');
  }


  submit()
 {

  console.log(this.createAgentForm.value);
 }
}
