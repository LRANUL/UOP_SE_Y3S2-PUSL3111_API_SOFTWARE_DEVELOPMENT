import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { officer } from '../modals/users';
import { CitizenService } from '../services/citizen.service';
import { OfficersService } from '../services/officers.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  pipe = new DatePipe("en-US");
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

  email = "hhvhjvj@vjhbjbk.vjhjhv";

  constructor(private officer : OfficersService) { }

  ngOnInit(): void {
    this.getOfficerDetails(this.email)
  }

  getOfficerDetails(email: string)
  {
    this.officer.getOfficer(email)
    this.officer.getTheOfficer().subscribe((data: officer)=>{
      this.officerDetails = {
       firstName: data.firstName,
       middleName: data.middleName,
       lastName: data.lastName,
       DOB: this.pipe.transform(data.DOB, "mediumDate"),
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
}
