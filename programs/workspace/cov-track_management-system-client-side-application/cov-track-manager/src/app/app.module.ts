import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChartModule } from 'angular-highcharts'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from './material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';



import { HeaderComponent } from './header/header.component';
import { CitizenListComponent } from './health-inspection/citizen-list/citizen-list.component';
import { CitizenViewComponent } from './health-inspection/citizen-view/citizen-view.component';
import { PlacesListComponent } from './places/places-list/places-list.component';
import { PlaceCreateComponent } from './places/place-create/place-create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { QRCodeModule } from 'angularx-qrcode';
import { QrGenerationComponent } from './places/qr-generation/qr-generation.component';

// import { LayoutsComponent } from './dashboard/layouts/layouts.component';
// import { DashboardComponent } from './dashboard/dashboard.component';

// import { DefaultComponent } from './dashboard/layouts/default/default.component';
// import { FooterComponent } from './dashboard/shared/components/footer/footer.component';
// import { SidebarComponent } from './dashboard/shared/components/sidebar/sidebar.component';
// import { AreaComponent } from './dashboard/shared/widgets/area/area.component';
// import { CardComponent } from './dashboard/shared/widgets/card/card.component';
// import { PieComponent } from './dashboard/shared/widgets/pie/pie.component';

import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';

import { HttpClientModule } from '@angular/common/http';
//import default modules
import { DefaultModule } from '../app/dashboard/layouts/default/default.module';
import { OfficersListComponent } from './officers/officers-list/officers-list.component';
import { OfficersViewComponent } from './officers/officers-view/officers-view.component';

// import {}  from '../app/dashboard/shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    // DashboardComponent,
    HeaderComponent,
    CitizenListComponent,
    CitizenViewComponent,
    PlacesListComponent,
    PlaceCreateComponent,
    QrGenerationComponent,
    OfficersListComponent,
    OfficersViewComponent,
    // LayoutsComponent,
    // DefaultComponent,
    // FooterComponent,
    // SidebarComponent,
    // AreaComponent,
    // CardComponent,
    // PieComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    QRCodeModule,
    MatDividerModule,
    MatSidenavModule,
    ChartModule,
    DefaultModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
