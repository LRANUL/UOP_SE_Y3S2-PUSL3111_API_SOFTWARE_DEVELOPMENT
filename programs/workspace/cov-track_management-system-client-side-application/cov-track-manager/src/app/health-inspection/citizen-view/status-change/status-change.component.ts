import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-status-change',
  templateUrl: './status-change.component.html',
  styleUrls: ['./status-change.component.css']
})
export class StatusChangeComponent implements OnInit {

  message ="Unknown Error! ";
  constructor(@Inject(MAT_DIALOG_DATA) public data:{message:string}){}

  ngOnInit(): void {
  }

}
