import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { view } from 'src/app/modals/users';
import { OfficersListComponent } from '../officers-list/officers-list.component';

@Component({
  selector: 'app-officers-view',
  templateUrl: './officers-view.component.html',
  styleUrls: ['./officers-view.component.css']
})
export class OfficersViewComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<OfficersListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: view) {}

  ngOnInit(): void {
    console.log(this.data)
  }



}
