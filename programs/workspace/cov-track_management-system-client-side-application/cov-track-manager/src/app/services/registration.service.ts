import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private serverPort:string = "http://localhost:8081/";
  constructor(private httpClient: HttpClient) { }

  signup(form)
  {
    console.log(form);
    return this.httpClient.post(this.serverPort+'api/signup', form)
  }
}
