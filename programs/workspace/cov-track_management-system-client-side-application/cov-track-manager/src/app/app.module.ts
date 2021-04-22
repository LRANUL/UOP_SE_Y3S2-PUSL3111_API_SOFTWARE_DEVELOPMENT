import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChartModule } from 'angular-highcharts'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';

import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';

import { MessagingService } from './services/messaging.service';
import { environment } from '../environments/environment';
import { AsyncPipe } from '../../node_modules/@angular/common';

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
import { OfficersEditComponent } from './officers/officers-edit/officers-edit.component';
import { PlacesEditComponent } from './places/places-edit/places-edit.component';
import { PlacesViewComponent } from './places/places-view/places-view.component';
import { NotificationComponent } from './notification/notification.component';

import { MatDialogModule } from '@angular/material/dialog'

import { NotifierModule } from 'angular-notifier';
import { ProfileComponent } from './profile/profile.component';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

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
    OfficersEditComponent,
    PlacesEditComponent,
    PlacesViewComponent,
    NotificationComponent,
    ProfileComponent,



    // LayoutsComponent,
    // DefaultComponent,
    // FooterComponent,
    // SidebarComponent,
    // AreaComponent,
    // CardComponent,
    // PieComponent,
  ],
  // entryComponents:[NotificationComponent],
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
    DefaultModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(environment.firebase),
    MatDialogModule
  ],
  providers: [MessagingService,AsyncPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
