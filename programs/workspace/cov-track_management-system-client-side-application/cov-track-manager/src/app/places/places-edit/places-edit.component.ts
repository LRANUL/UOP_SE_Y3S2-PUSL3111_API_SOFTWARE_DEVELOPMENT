import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms'

import { locationsService } from '../../services/location.service'
import { place } from '../../modals/users'
import { MatSidenavModule } from '@angular/material/sidenav';

declare var M: any;

@Component({
  selector: 'app-places-edit',
  templateUrl: './places-edit.component.html',
  styleUrls: ['./places-edit.component.css'],
  providers: [locationsService]
})
export class PlacesEditComponent implements OnInit {

  constructor(public location: locationsService, public getInfo: locationsService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshLocationList();
    // this.onsubmit();

  }

  resetForm(form?: NgForm) {
    // if (form)
    //   form.reset();

    this.location.selectedPlace = {
      name: "",
      address: "",
      sector: "",
      email: "",
      phone: "",
      city: "",
      QRcode: ""
    }

    this.getInfo.getlocation().subscribe(res => {
      //console.log(res)
    })


  }

  onSubmit(form?: NgForm) {

    //console.log("Hello World")


    this.location.putLocation(form.value).subscribe((res)=>{
      this.resetForm(form);
      this.refreshLocationList();

    })
  }


  refreshLocationList() {
    this.getInfo.getlocation().subscribe((res) => {
      //console.log("********************", res,"********************")
      this.location.Place = res as place[];
      // let y = this.getInfo.Place
      // console.log(y)
    });
  }

  onEdit(list : place){
    this.location.selectedPlace = list;
    console.log("Hello World")
  }

  onDelete(email: string, form: NgForm){
    if(confirm('Are you sure want to delete')==true){
      this.location.deleteLocation(email).subscribe((res)=>{
        this.refreshLocationList();
        this.resetForm(form);
      })
    }

  }




}
