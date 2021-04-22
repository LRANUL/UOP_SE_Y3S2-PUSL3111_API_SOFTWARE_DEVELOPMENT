import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { place } from 'src/app/modals/users';
import { locationsService } from 'src/app/services/location.service';
import { PlacesViewComponent } from '../places-view/places-view.component';

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.css']
})
export class PlacesListComponent implements OnInit {

  constructor(private location: locationsService, private router: Router, public dialog: MatDialog) { }

  type1 = "Private";
  locationsPrivate = new Array();
  dataPrivate : place = {
    uid: '',
    name: '',
    address: '',
    sector: '',
    email: '',
    phone: '',
    city: ''
  };

  type2 = "Public";
  locationsPublic = new Array();
  dataPublic : place = {
    uid: '',
    name: '',
    address: '',
    sector: '',
    email: '',
    phone: '',
    city: ''
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
        uid: data[counter].uid,
        name: data[counter].name,
        address: data[counter].address,
        sector: data[counter].sector,
        email: data[counter].email,
        phone: data[counter].phone,
        city: data[counter].city
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
        uid: data[counter].uid,
        name: data[counter].name,
        address: data[counter].address,
        sector: data[counter].sector,
        email: data[counter].email,
        phone: data[counter].phone,
        city: data[counter].city,
       };
       this.locationsPublic.push(this.dataPublic);
      }
    });
  }

  addLocation()
  {
    this.router.navigateByUrl("/places/create");
  }

  viewUser(value: string)
  {
    const dialogRef = this.dialog.open(PlacesViewComponent, {
      width: '50%',
      height: '85%',
      data: {uid: value}
    });
  }

  downloadQR(code) {
    const parentElement =  code.el.nativeElement.querySelector("img").src;
    let blobData = this.convertBase64ToBlob(parentElement);
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(blobData, 'Qrcode');
    } else {
      const blob = new Blob([blobData], { type: "image/png" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Qrcode';
      link.click();
    }
  }

  private convertBase64ToBlob(Base64Image: any) {
    const parts = Base64Image.split(';base64,');
    let link = parts[1]
    const imageType = parts[0].split(':')[1];
    const decodedData = window.atob(parts[1]);
    const uInt8Array = new Uint8Array(decodedData.length);
    for (let i = 0; i < decodedData.length; ++i) {
      uInt8Array[i] = decodedData.charCodeAt(i);
    }
    return new Blob([uInt8Array], { type: imageType });
  }
}
