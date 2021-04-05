import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { officer, officers, view } from 'src/app/modals/users';
import { OfficersService } from 'src/app/services/officers.service';
import { OfficersListComponent } from '../officers-list/officers-list.component';

@Component({
  selector: 'app-officers-view',
  templateUrl: './officers-view.component.html',
  styleUrls: ['./officers-view.component.css']
})
export class OfficersViewComponent implements OnInit {

  constructor(public officer: OfficersService, public router: Router,
    public dialogRef: MatDialogRef<OfficersListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: view) {}

  ngOnInit(): void {
    this.getUser(this.data.email)
  }

  officerDetails: officer ={
    firstName: '',
    middleName: '',
    lastName: '',
    DOB: '',
    email: '',
    password: '',
     phone: '',
    address: '',
    city: '',
    userType: '',
    userName: '',
    createdAt: '',
    updatedAt: ''
  };

  getUser(email)
  {
  this.officer.getOfficer(email);
  this.officer.getTheOfficer().subscribe((data: officer)=>{
   this.officerDetails = {
    firstName: data.firstName,
    middleName: data.middleName,
    lastName: data.lastName,
    DOB: data.DOB,
    email: data.email,
    password: data.password,
    phone: data.phone,
    address: data.address,
    city: data.city,
    userType: data.userType,
    userName: data.userName,
    createdAt: data.createdAt,
    updatedAt: data.updatedAt
   };
   console.log(this.officerDetails);
  })
}

close()
{
  this.dialogRef.close();
  this.router.navigateByUrl("/officers");
}
}
