import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'

import { HeaderComponent } from '../header/header.component'

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  // openDialog(){
  //   //open page
  //   this.dialog.open(HeaderComponent);
  // }


  ngOnInit(): void {
  }

}
