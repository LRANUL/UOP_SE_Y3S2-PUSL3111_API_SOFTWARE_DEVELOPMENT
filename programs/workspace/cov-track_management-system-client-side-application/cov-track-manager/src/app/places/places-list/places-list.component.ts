import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { place } from 'src/app/modals/users';
import { locationsService } from 'src/app/services/location.service';

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.css']
})
export class PlacesListComponent implements OnInit {

  constructor(private location: locationsService, private router: Router) { }

  type1 = "Private";
  locationsPrivate = new Array();
  dataPrivate : place = {
    name: '',
    address: '',
    sector: '',
    email: '',
    phone: '',
    city: '',
    QRcode: '',
    QRimage: ''
  };

  type2 = "Public";
  locationsPublic = new Array();
  dataPublic : place = {
    name: '',
    address: '',
    sector: '',
    email: '',
    phone: '',
    city: '',
    QRcode: '',
    QRimage: ''
  };
  ngOnInit(): void {
    this.getPrivateLocation(this.type1);
    this.getPublicLocation(this.type2);
  }

  getPrivateLocation(type: string)
  {
    this.location.getlocationPrivate(type)
    this.location.getTheLocationsPrivate().subscribe((data: place)=>{
      let value = Object.keys(data)
      let length = value.length;
      let counter = 0;
      for(counter; counter < length; counter++)
      {
       this.dataPrivate = {
        name: data[counter].name,
        address: data[counter].address,
        sector: data[counter].sector,
        email: data[counter].email,
        phone: data[counter].phone,
        city: data[counter].city,
        QRcode: data[counter].QRcode,
        QRimage: data[counter].QRimage
       };
       this.locationsPrivate.push(this.dataPrivate);
      }
    });
  }

  getPublicLocation(type: string)
  {
    this.location.getlocationPublic(type)
    this.location.getTheLocationsPublic().subscribe((data: place)=>{
      let value = Object.keys(data)
      let length = value.length;
      let counter = 0;
      for(counter; counter < length; counter++)
      {
       this.dataPublic = {
        name: data[counter].name,
        address: data[counter].address,
        sector: data[counter].sector,
        email: data[counter].email,
        phone: data[counter].phone,
        city: data[counter].city,
        QRcode: data[counter].QRcode,
        QRimage: data[counter].QRimage
       };
       this.locationsPublic.push(this.dataPublic);
      }
    });
  }

  addLocation()
  {
    this.router.navigateByUrl("/places/create");
  }
}
