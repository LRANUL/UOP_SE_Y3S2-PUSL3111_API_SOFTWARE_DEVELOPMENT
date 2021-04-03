import { NgModule } from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import { HighchartsChartModule } from 'highcharts-angular';


@NgModule({
  imports: [
     MatSliderModule,
     MatCardModule,
     MatInputModule,
     MatButtonModule,
     MatDatepickerModule,
     MatNativeDateModule,
     MatSelectModule,
     MatTabsModule,
     MatPaginatorModule,
     MatDialogModule,
     HighchartsChartModule
  ],
  exports: [
    MatSliderModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTabsModule,
    MatPaginatorModule,
    MatDialogModule
  ]
})

export class MaterialModule {}
