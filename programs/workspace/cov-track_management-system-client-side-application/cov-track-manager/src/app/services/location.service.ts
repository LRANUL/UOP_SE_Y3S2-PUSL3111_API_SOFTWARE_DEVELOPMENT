import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { place } from '../modals/users'

@Injectable({
  providedIn: 'root'
})
export class locationsService {

  selectedPlace: place;
  Place: place[];


  // selectedEmployee: Employee;
  // employees: Employee[];

  constructor(private httpClient: HttpClient) { }

  public locationUpdatedPrivate = {
    uid: '',
    name: '',
    address: '',
    sector: '',
    email: '',
    phone: '',
    city: ''
    };
    private locationPrivate = new Subject();

    getTheLocationsPrivate()
    {
      return this.locationPrivate.asObservable();
    }

    public locationUpdatedPublic = {
      uid: '',
      name: '',
      address: '',
      sector: '',
      email: '',
      phone: '',
      city: ''
      };
      private locationPublic = new Subject();

      getTheLocationsPublic()
      {
        return this.locationPublic.asObservable();
      }

      public locationUpdated = {
        uid: '',
        name: '',
        address: '',
        sector: '',
        email: '',
        phone: '',
        city: ''
        };
        private location = new Subject();

        getOneLocation()
        {
          return this.location.asObservable();
        }


  createlocation(form)
  {
    console.log(form);
      return this.httpClient.post('http://localhost:8081/api/places', form).subscribe((result)=>{
      console.log(result);
      });
  }

  getlocationPrivate(type)
  {
      return this.httpClient.get<{message : string, data : any}>('http://localhost:8081/api/places/' + type).subscribe(res=>{
        this.locationUpdatedPrivate = res.data;
        this.locationPrivate.next(this.locationUpdatedPrivate);
     });;
  }

  getlocationPublic(type)
  {
      return this.httpClient.get<{message : string, data : any}>('http://localhost:8081/api/places/' + type).subscribe(res=>{
        console.log(res.data);
        this.locationUpdatedPublic = res.data;
        this.locationPublic.next(this.locationUpdatedPublic);
     });;
  }

  getSinglelocation(code)  {
    return this.httpClient.get<{message : string, data : any}>('http://localhost:8081/api/one/place/' + code).subscribe(res=>{
      console.log(res.data);
      this.locationUpdated = res.data;
      this.location.next(this.locationUpdated);
   });
  }


  //stifi
  getlocation()  {
    return this.httpClient.get('http://localhost:8081/api/places/');
  }

  putLocation(place: place){
    return this.httpClient.put('http://localhost:8081/api/places/'+`${place.email}`,place)
  }

  deleteLocation(email:string){
    return this.httpClient.delete('http://localhost:8081/api/places/delete/'+`${email}`)
  }
}
