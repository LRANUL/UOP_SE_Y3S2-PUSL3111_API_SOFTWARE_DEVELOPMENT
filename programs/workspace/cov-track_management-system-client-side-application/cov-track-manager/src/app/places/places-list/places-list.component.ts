import { Component, OnInit } from '@angular/core';
import { place } from 'src/app/modals/users';
import { locationsService } from 'src/app/services/location.service';

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.css']
})
export class PlacesListComponent implements OnInit {

  constructor(private location: locationsService) { }

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
    this.location.getTheLocationsPrivate().subscribe((tt: place)=>{
      let value = Object.keys(tt)
      let length = value.length;
      let counter = 0;
      for(counter; counter < length; counter++)
      {
       this.dataPrivate = {
        name: tt[counter].name,
        address: tt[counter].address,
        sector: tt[counter].sector,
        email: tt[counter].email,
        phone: tt[counter].phone,
        city: tt[counter].city,
        QRcode: tt[counter].QRcode,
        QRimage: tt[counter].QRimage
       };
       this.locationsPrivate.push(this.dataPrivate);
      }
    });
  }

  getPublicLocation(type: string)
  {
    this.location.getlocationPublic(type)
    this.location.getTheLocationsPublic().subscribe((tt: place)=>{
      let value = Object.keys(tt)
      let length = value.length;
      let counter = 0;
      for(counter; counter < length; counter++)
      {
       this.dataPublic = {
        name: tt[counter].name,
        address: tt[counter].address,
        sector: tt[counter].sector,
        email: tt[counter].email,
        phone: tt[counter].phone,
        city: tt[counter].city,
        QRcode: tt[counter].QRcode,
        QRimage: tt[counter].QRimage
       };
       this.locationsPublic.push(this.dataPublic);
      }
    });
  }
}
