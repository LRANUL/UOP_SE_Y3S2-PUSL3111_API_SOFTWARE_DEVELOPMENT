import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class locationsService {

  constructor(private httpClient: HttpClient) { }

  public locationUpdatedPrivate = {
    name: '',
    address: '',
    sector: '',
    email: '',
    phone: '',
    city: '',
    QRcode: '',
    QRimage: ''
    };
    private locationPrivate = new Subject();

    getTheLocationsPrivate()
    {
      return this.locationPrivate.asObservable();
    }

    public locationUpdatedPublic = {
      name: '',
      address: '',
      sector: '',
      email: '',
      phone: '',
      city: '',
      QRcode: '',
      QRimage: ''
      };
      private locationPublic = new Subject();

      getTheLocationsPublic()
      {
        return this.locationPublic.asObservable();
      }


  createlocation(form)
  {
    console.log(form);
      return this.httpClient.post('http://localhost:5000/protected/places', form).subscribe((result)=>{
      console.log(result);
      });
  }

  getlocationPrivate(type)
  {
      return this.httpClient.get<{message : string, data : any}>('http://localhost:5000/protected/places/' + type).subscribe(res=>{
        this.locationUpdatedPrivate = res.data;
        this.locationPrivate.next(this.locationUpdatedPrivate);
     });;
  }

  getlocationPublic(type)
  {
      return this.httpClient.get<{message : string, data : any}>('http://localhost:5000/protected/places/' + type).subscribe(res=>{
        console.log(res.data);
        this.locationUpdatedPublic = res.data;
        this.locationPublic.next(this.locationUpdatedPublic);
     });;
  }
}
