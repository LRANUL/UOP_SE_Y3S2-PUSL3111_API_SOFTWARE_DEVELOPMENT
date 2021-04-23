import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { customers } from 'src/app/modals/citizen';
import { CitizenService } from 'src/app/services/citizen.service';
import { StatusChangeComponent } from '../citizen-view/status-change/status-change.component';

@Component({
  templateUrl: './citizen-list.component.html',
  styleUrls: ['./citizen-list.component.css']
})
export class CitizenListComponent implements OnInit, OnDestroy {
  healthState = "Not-infected"
  mode ="CitizenList"; // CitizenList || PotentialInfected || CitizenAccount
  CitizenSub:Subscription
  citizen:customers [] = [];
  infectedCitizenID :string;

  onChangedPage(page:PageEvent){

  this.currentPage = page.pageIndex+ 1;
  this.cutomersPerPage = page.pageSize;
  this.citizenServ.getCustomers(this.cutomersPerPage,this.currentPage);
  }

  totalCustomers =10;
  cutomersPerPage = 10;
  pageSizes = [2,5,10,20];
  currentPage =1;

  constructor(private citizenServ:CitizenService, public dialog: MatDialog,private route:ActivatedRoute) { }

  openDialog() {
    const dialogRef = this.dialog.open(StatusChangeComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe((mode:ParamMap)=>{
      if(mode.has('infectedCitizenId')){
        this.infectedCitizenID = mode.get('infectedCitizenId');
        this.mode="PotentialInfected"
        this.citizenServ.getPotentialInfected(this.infectedCitizenID).subscribe((res)=>{
          console.log(res);
        })
      }else{
        this.citizenServ.getCustomers(this.cutomersPerPage,this.currentPage);
        this.CitizenSub =  this.citizenServ.getCustomerUpdates().subscribe((x:{customers:customers[]})=>{
        this.citizen = x.customers;
    })
      }
    })


  }
  ngOnDestroy(){
    this.CitizenSub.unsubscribe();
  }


}
