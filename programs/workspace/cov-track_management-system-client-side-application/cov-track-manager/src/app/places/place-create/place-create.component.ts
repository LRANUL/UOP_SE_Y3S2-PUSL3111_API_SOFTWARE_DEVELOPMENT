import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { locationsService } from 'src/app/services/location.service';
import { QrGenerationComponent } from '../qr-generation/qr-generation.component';

@Component({
  selector: 'app-place-create',
  templateUrl: './place-create.component.html',
  styleUrls: ['./place-create.component.css']
})
export class PlaceCreateComponent implements OnInit {

  createAgentForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public dialog: MatDialog, private router: Router, private location: locationsService) { }

  code ="vsdvsvsvsvdsv";

  ngOnInit(): void {
    this.createAgentForm = this.formBuilder.group({
      organizationName: ['',[
        Validators.required
      ]],
      organizationSector: ['',[
        Validators.required
      ]],
      organizationAddress: ['',[
        Validators.required
      ]],
      organizationCity: ['',[
        Validators.required
      ]],
      organizationEmail: ['',[
        Validators.required,
        Validators.email
      ]],
       organizationPhone: ['',[
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(10)
      ]],
      QRcode: ['']
    });
  }

  // send the organization name and opens the qr-generation component
  openDialog(value): void {
    const dialogRef = this.dialog.open(QrGenerationComponent, {
      width: '400px',
      height: '400px',
      data:
      {
        name: this.createAgentForm.get('organizationName').value,
        address: this.createAgentForm.get('organizationAddress').value,
        sector: this.createAgentForm.get('organizationSector').value,
        email: this.createAgentForm.get('organizationEmail').value,
        phone: this.createAgentForm.get('organizationPhone').value,
        city: this.createAgentForm.get('organizationCity').value,
        QRcode: this.createAgentForm.get('QRcode').value,
        QRimage: '',
      },
      disableClose: true
    });
  }

  get organizationName() {
    return this.createAgentForm.get('organizationName');
  }
  get organizationAddress() {
    return this.createAgentForm.get('organizationAddress');
  }
  get organizationSector() {
    return this.createAgentForm.get('organizationSector');
  }
  get organizationEmail() {
    return this.createAgentForm.get('organizationEmail');
  }

  get organizationPhone() {
    return this.createAgentForm.get('organizationPhone');
  }

  get organizationcity() {
    return this.createAgentForm.get(' organizationCity');
  }

  get QRcode() {
    return this.createAgentForm.get('QRcode');
  }

  submit()
 {
  console.log(this.createAgentForm.value);
  let random = Math.floor(Math.random() * (999999 - 100000)) + 100000;
  let val = random.toString();
  let code = this.createAgentForm.get('organizationName').value + val;
  this.createAgentForm.get('QRcode').setValue(code);
  console.log(this.createAgentForm.value);
  this.openDialog(this.createAgentForm.value);
 }


 cancel()
 {
  this.router.navigateByUrl("/places");
 }
}
