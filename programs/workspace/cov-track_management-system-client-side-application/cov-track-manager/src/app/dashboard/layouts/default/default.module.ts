import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultComponent } from './default.component';
import { DashboardComponent } from '../../modules/dashboard/dashboard.component';
// import { DashboardService } from 'src/app/modules/dashboard.service';
import { DashboardService } from '../../modules/dashboard.service';
// import { SharedModule } from 'src/app/shared/shared.module';
import { SharedModule } from '../../shared/shared.module';

import { RouterModule } from '@angular/router';
// import { PostsComponent } from 'src/app/modules/posts/posts.component';


// import { MatSidenavModule, MatDividerModule, MatCardModule, MatPaginatorModule, MatTableModule } from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';



import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    // PostsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers: [
    DashboardService
  ]
})
export class DefaultModule { }
