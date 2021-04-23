import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { RegistrationService } from '../services/registration.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  AuthStatus=false;


  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router,private AuthServ:RegistrationService) { }

private AuthStatusSub :Subscription;
  ngOnInit(){
    this.AuthStatus = this.AuthServ.getAuthStatus();
    this.AuthStatusSub =this.AuthServ.getAuthStatusSub().subscribe(authStatus=>{
      this.AuthStatus =authStatus;
    })
  }

ngOnDestroy(){
 this.AuthStatusSub.unsubscribe();
}


  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

  onLogout(){
    console.log("logout");
  }
}
