import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms'
import { locationsService } from '../../services/location.service'

@Component({
  selector: 'app-places-edit',
  templateUrl: './places-edit.component.html',
  styleUrls: ['./places-edit.component.css'],
  providers: [locationsService]
})
export class PlacesEditComponent implements OnInit {

  constructor(public location: locationsService, public getInfo: locationsService) { }

  ngOnInit(): void {
    this.resetForm();
    // this.onsubmit();

  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();

    this.location.selectedPlace = {
      name: "",
      address: "",
      sector: "",
      email: "",
      phone: "",
      city: "",
      QRcode: "",
      QRimage: "",
      
    }

    this.getInfo.getlocation().subscribe(res=>{
      console.log(res)
    })


  }

  onSubmit(form?: NgForm) {
    console.log("Hello World")
    

    


    // this.location.getTheLocationsPublic().subscribe(res=>{
    //   console.log("Done")
    // })

    
    
    

  }

  
  

}
