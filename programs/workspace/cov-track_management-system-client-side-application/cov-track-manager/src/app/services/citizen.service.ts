import { Injectable } from "@angular/core";
import { customers } from "../modals/citizen";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators"
import { Router } from "@angular/router";
import { Subject } from "rxjs";

@Injectable({providedIn:'root'})
export class CitizenService{
  private Customers:customers [] = [];
  private customersUpdated =new Subject<{customers:customers[]}>()
  private serverPort:string = "http://localhost:8081/";
  constructor(private httpCli:HttpClient , private router:Router){}

  getCustomers(postPerPage:number,currrentPage:number){
    const queryParams = `?pageSize=${postPerPage}&page=${currrentPage}`;
    this.httpCli.get<{citizens:customers[],maxCitizen:number}>(this.serverPort+'api/getCitizens'+ queryParams).subscribe((x)=>{
      this.Customers = x.citizens;
      console.log(this.Customers);
      this.customersUpdated.next({customers:[...this.Customers]})
    })
  }

  getCustomerUpdates(){
    return this.customersUpdated.asObservable();
  }

  getCustomer(nic:string){
    return this.httpCli.get<customers>(this.serverPort+'api/citizens/'+nic);
  }

  getPotentialInfected(nic:string){
    return this.httpCli.get(this.serverPort+'api/potectialInfcted/'+nic);
  }

  updateCustomer(citizen:customers,nic:string){
    return this.httpCli.put(this.serverPort+'api/citizen/'+nic,citizen)
  }
}
