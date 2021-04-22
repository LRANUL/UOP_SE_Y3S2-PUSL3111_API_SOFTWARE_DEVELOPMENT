import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private httpClient: HttpClient) { }

  signup(form)
  {
    console.log(form);
    return this.httpClient.post('http://localhost:8081/api/signup', form)
  }
}
