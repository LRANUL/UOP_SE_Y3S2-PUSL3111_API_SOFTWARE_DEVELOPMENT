import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class locationsService {

  constructor(private httpClient: HttpClient) { }

  createlocation(form)
  {
    console.log(form);
      return this.httpClient.post('http://localhost:5000/places/', form);
  }
}
