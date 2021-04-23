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
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';


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
    HighchartsChartModule,
    MatGridListModule,
    MatMenuModule,
    MatSnackBarModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule
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
    MatDialogModule,
    MatGridListModule,
    MatMenuModule,
    MatSnackBarModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule
  ]
})

export class MaterialModule {}
