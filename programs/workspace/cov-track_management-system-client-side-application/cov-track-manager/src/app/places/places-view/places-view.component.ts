import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { place, singleLocation } from 'src/app/modals/users';
import { locationsService } from 'src/app/services/location.service';
import { PlacesListComponent } from '../places-list/places-list.component';

@Component({
  selector: 'app-places-view',
  templateUrl: './places-view.component.html',
  styleUrls: ['./places-view.component.css']
})
export class PlacesViewComponent implements OnInit {

  constructor(public places: locationsService, public router: Router,
    public dialogRef: MatDialogRef<PlacesListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: singleLocation) { }

  ngOnInit(): void {
    this.getUser(this.data.qrCode);
  }

  placeDetails: place ={
    name: '',
    address: '',
    sector: '',
    email: '',
    phone: '',
    city: '',
    QRcode: ''
  };

  getUser(code)
  {
  this.places.getSinglelocation(code);
  this.places.getOneLocation().subscribe((data: place)=>{
    this.placeDetails ={
      name: data.name,
      address: data.address,
      sector: data.sector,
      email: data.email,
      phone: data.phone,
      city: data.city,
      QRcode: data.QRcode
    };
  })
}

close()
{
  this.dialogRef.close();
  this.router.navigateByUrl("/places");
}
}
