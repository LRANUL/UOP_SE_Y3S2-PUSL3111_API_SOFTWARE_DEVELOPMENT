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
     MatPaginatorModule
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
    MatPaginatorModule
  ]
})

export class MaterialModule {}
