import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { officers } from 'src/app/modals/users';
import { OfficersService } from 'src/app/services/officers.service';
import { OfficersViewComponent } from '../officers-view/officers-view.component';

@Component({
  selector: 'app-officers-list',
  templateUrl: './officers-list.component.html',
  styleUrls: ['./officers-list.component.css']
})
export class OfficersListComponent implements OnInit {

  constructor(private officers: OfficersService, public dialog: MatDialog) { }

  type1 = "CDC Officers";
  CDCofficers = new Array();
  dataCDB : officers = {
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
  userName: ''
  };

  type2 = "PHI Officers";
  PHIofficers = new Array();
  dataPHI : officers = {
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
    userName: ''
  };
  ngOnInit(): void {
    this.getPrivateLocation(this.type1);
    this.getPublicLocation(this.type2);
  }

  getPrivateLocation(type: string)
  {
    this.officers.getCDCOfficers(type)
    this.officers.getTheCDCOfficers().subscribe((data: officers)=>{
      let value = Object.keys(data)
      let length = value.length;
      let counter = 0;
      for(counter; counter < length; counter++)
      {
       this.dataCDB = {
        firstName: data[counter].firstName,
        middleName: data[counter].middleName,
        lastName: data[counter].lastName,
        DOB: data[counter].DOB,
        email: data[counter].email,
        password: data[counter].password,
        phone: data[counter].phone,
        address: data[counter].address,
        city: data[counter].city,
        userType: data[counter].userType,
        userName: data[counter].userName
       };
       this.CDCofficers.push(this.dataCDB);
      }
    });
  }

  getPublicLocation(type: string)
  {
    this.officers.getPHIOfficers(type)
    this.officers.getThePHIOfficers().subscribe((data: officers)=>{
      let tt = data;
      console.log(tt);
      let value = Object.keys(data)
      let length = value.length;
      let counter = 0;
      for(counter; counter < length; counter++)
      {
        this.dataPHI = {
        firstName: data[counter].firstName,
        middleName: data[counter].middleName,
        lastName: data[counter].lastName,
        DOB: data[counter].DOB,
        email: data[counter].email,
        password: data[counter].password,
        phone: data[counter].phone,
        address: data[counter].address,
        city: data[counter].city,
        userType: data[counter].userType,
        userName: data[counter].userName
         };
       this.PHIofficers.push(this.dataPHI);
      }
    });
    console.log(this.PHIofficers)
  }

  viewUser(value: string)
  {
    const dialogRef = this.dialog.open(OfficersViewComponent, {
      width: '250px',
      data: {email: value}
    });
  }
}
