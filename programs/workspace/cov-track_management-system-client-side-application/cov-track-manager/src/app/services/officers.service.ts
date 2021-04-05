import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfficersService {

  constructor(private httpClient: HttpClient) { }

  public CDCUpdatedOfficers = {
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
    private CDCOfficers = new Subject();

    getTheCDCOfficers()
    {
      return this.CDCOfficers.asObservable();
    }

    public PHIUpdatedOfficers = {
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
      private PHIOfficers = new Subject();

      getThePHIOfficers()
      {
        return this.PHIOfficers.asObservable();
      }

  getCDCOfficers(type)
  {
      return this.httpClient.get<{message : string, data : any}>('http://localhost:5000/protected/officers/' + type).subscribe(res=>{
        console.log(res.data);
        this.CDCUpdatedOfficers = res.data;
        this.CDCOfficers.next(this.CDCUpdatedOfficers);
     });;
  }

  getPHIOfficers(type)
  {
    console.log(type);
      return this.httpClient.get<{message : string, data : any}>('http://localhost:5000/protected/officers/' + type).subscribe(res=>{
        console.log(res.data);
        this.PHIUpdatedOfficers = res.data;
        this.PHIOfficers.next(this.PHIUpdatedOfficers);
     });;
  }
}
