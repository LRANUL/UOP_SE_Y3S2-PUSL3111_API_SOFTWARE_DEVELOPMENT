import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog'

import { NotificationComponent } from '../../../../notification/notification.component'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit() { }

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

  logIn()
  {
    this.router.navigateByUrl("/login");
  }

  openDialog(){
    //open page
    this.dialog.open(NotificationComponent);
  }

}
