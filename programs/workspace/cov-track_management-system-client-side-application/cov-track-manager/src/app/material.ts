import { NgModule } from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  imports: [
     MatSliderModule,
     MatCardModule,
     MatInputModule,
     MatButtonModule,
     MatDatepickerModule,
     MatNativeDateModule,
     MatSelectModule
  ],
  exports: [
    MatSliderModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ]
})

export class MaterialModule {}
