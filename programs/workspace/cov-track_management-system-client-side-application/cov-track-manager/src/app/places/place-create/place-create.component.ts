import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { QrGenerationComponent } from '../qr-generation/qr-generation.component';

@Component({
  selector: 'app-place-create',
  templateUrl: './place-create.component.html',
  styleUrls: ['./place-create.component.css']
})
export class PlaceCreateComponent implements OnInit {

  createAgentForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public dialog: MatDialog, private router: Router) { }

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
  openDialog(): void {
    const dialogRef = this.dialog.open(QrGenerationComponent, {
      width: '400px',
      height: '400px',
      data: {qrString: this.createAgentForm.get('organizationName').value}
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

  submit()
 {
  console.log(this.createAgentForm.value);
  this.openDialog();
 }

 cancel()
 {
   this.router.navigateByUrl('');
 }
}
