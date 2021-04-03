import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatTableDataSource } from '@angular/material/table';
// import { MatTableDataSource, MatPaginator } from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

export interface PeriodicElement {
  Name: string;
  Hospital_ID: number;
  Hospital_Number: string;
  Location: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  { Hospital_ID: 1, Name: 'Colombo General Hospital - කොළඹ මහ රෝහල', Hospital_Number: '011-222222', Location: 'Colombo 08' },
  { Hospital_ID: 2, Name: 'Nevil Fernando Hospital - නෙවිල් ප්‍රනාන්දු රෝහල', Hospital_Number: '011-222222', Location: 'Colombo 08' },
  // { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  // { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  // { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  // { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  // { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  // { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  // { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  // { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  // { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  // { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
  // { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
  // { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
  // { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
  // { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
  // { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
  // { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
  // { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
  // { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
  // { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  bigChart = [];
  cards = [];
  pieChart = [];

  displayedColumns: string[] = [ 'Name','Hospital_ID', 'Hospital_Number', 'Location'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginatorModule, { static: true }) paginator: MatPaginatorModule;

  constructor(private dashboardService: DashboardService, private _http: HttpClient) { }

  ngOnInit() {
    this.bigChart = this.dashboardService.bigChart();
    this.cards = this.dashboardService.cards();
    this.pieChart = this.dashboardService.pieChart();
    // this.dataSource.paginator = this.paginator;
    
    this.paginator = this.dataSource.paginator;

    this.getCovidDetails();
    
  }

  

  getCovidDetails() {
    this._http.get("https://www.hpb.health.gov.lk/api/get-current-statistical").subscribe(res => {
      console.log(res)
      console.log("************")
    })
  }

}
