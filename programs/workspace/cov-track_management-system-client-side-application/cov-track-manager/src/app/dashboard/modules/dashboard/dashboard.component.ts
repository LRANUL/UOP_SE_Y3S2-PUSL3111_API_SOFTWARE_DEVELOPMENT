import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatTableDataSource } from '@angular/material/table';
// import { MatTableDataSource, MatPaginator } from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';


export interface PeriodicElement {
  Name: string;
  Hospital_ID: number;
  Hospital_Number: string;
  Location: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  { Hospital_ID: 1, Name: 'Colombo General Hospital - කොළඹ මහ රෝහල', Hospital_Number: '011-222222', Location: 'Colombo 08' },
  { Hospital_ID: 2, Name: 'Nevil Fernando Hospital - නෙවිල් ප්‍රනාන්දු රෝහල', Hospital_Number: '011-123123', Location: 'Malabe' },
  { Hospital_ID: 3, Name: 'TH - Ragama - ශික්ෂණ රෝහල - රාගම', Hospital_Number: '011-789789', Location: 'Ragama' },
  { Hospital_ID: 4, Name: 'TH - Karapitiya - ශික්ෂණ රෝහල - කරපිටිය', Hospital_Number: '011-456456', Location: 'Karapitiya' },
  { Hospital_ID: 5, Name: 'TH - Anuradhapura - ශික්ෂණ රෝහල - අනුරාධපුර', Hospital_Number: '011-445588', Location: 'Anuradhapura' },
  { Hospital_ID: 6, Name: 'TH - Kurunegala - ශික්ෂණ රෝහල - කුරුණගල', Hospital_Number: '011-778899', Location: 'Kurunegala' },
  { Hospital_ID: 7, Name: 'National Hospital Kandy - ජාතික රෝහල - මහනුවර', Hospital_Number: '011-115599', Location: 'Kandy' },
  { Hospital_ID: 8, Name: 'TH – Batticaloa - ශික්ෂණ රෝහල - මඩකලපුව', Hospital_Number: '011-112233', Location: 'Batticola' },
  { Hospital_ID: 9, Name: 'DGH- Gampaha - දිස්ත්‍රික් මහ රෝහල - ගම්පහ', Hospital_Number: '011-775588', Location: 'Gampaha' },
  { Hospital_ID: 10, Name: 'DGH – Negombo - දිස්ත්‍රික් මහ රෝහල - මීගමුව', Hospital_Number: '011-114466', Location: 'Negambo' },
  { Hospital_ID: 11, Name: 'TH – Rathnapura - ශික්ෂණ රෝහල - රත්නපුර', Hospital_Number: '011-889955', Location: 'Rathnapura' },
  { Hospital_ID: 12, Name: 'PGH – Badulla - පළාත් මහ රෝහල - බදුල්ල', Hospital_Number: '011-222222', Location: 'Badulla' },
  { Hospital_ID: 13, Name: 'LRH - රිජ්වේ ආර්යා ළමා රෝහල', Hospital_Number: '011-222222', Location: 'Colombo 08' },
  { Hospital_ID: 14, Name: 'DGH – Polonnaruwa - දිස්ත්‍රික් මහ රෝහල - පොලොන්නරුව', Hospital_Number: '011-222222', Location: 'Polonnaruwa' },
  { Hospital_ID: 15, Name: 'TH - Kalubowila - දිස්ත්‍රික් මහ රෝහල - කලුබෝවිල', Hospital_Number: '011-222222', Location: 'Kalubowila' },
  { Hospital_ID: 16, Name: 'Base Hospital- Hambantota - මූලික රෝහල - හම්බන්තොට', Hospital_Number: '011-222222', Location: 'Hambanthota' },
  { Hospital_ID: 17, Name: 'Base Hospital - Monaragala - මූලික රෝහල - මොනරාගල', Hospital_Number: '011-222222', Location: 'Monaragala' },
  { Hospital_ID: 18, Name: 'Base Hospital - Welikanda - මූලික රෝහල - වැලිකන්ද', Hospital_Number: '011-222222', Location: 'Welikanda' },
  { Hospital_ID: 19, Name: 'DGH-Kalutara - දිස්ත්‍රික් මහ රෝහල - කළුතර', Hospital_Number: '011-222222', Location: 'Kalthara' },
  { Hospital_ID: 20, Name: 'Base Hospital Mulleriyawa - මූලික රෝහල  - මුල්ලේරියාව', Hospital_Number: '011-222222', Location: 'Mulleriyawa' },
  // { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },

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

  // @ViewChild(MatPaginatorModule, { static: true }) paginator: MatPaginatorModule;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private dashboardService: DashboardService, private _http: HttpClient) { }

  ngOnInit() {
    this.bigChart = this.dashboardService.bigChart();
    this.cards = this.dashboardService.cards();
    this.pieChart = this.dashboardService.pieChart();
    this.dataSource.paginator = this.paginator
    
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
