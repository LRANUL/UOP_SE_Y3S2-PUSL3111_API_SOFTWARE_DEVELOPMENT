import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private AuthStatus =false;
  private token:string;
  private authStatusListener = new Subject<boolean>();
  private tokenTimer:any;
  private userId:string;


  private serverPort:string = "http://localhost:8081/";
  constructor(private httpcli: HttpClient,private router:Router) { }

  signup(form)
  {
    console.log(form);

    return this.httpcli.post(this.serverPort+'api/signup', form)

  }

  longin(email:string,passwrd:string){
    const AuthData = {email:email , password: passwrd };
      this.httpcli.post<{token:string,userName:string}>("http://localhost:3000/api/user/login",AuthData).subscribe(res =>{
          const token = res.token;
          this.token =token
          if(token){
            this.authStatusListener.next(true);
            this.AuthStatus = true;
            const nowDate = new Date();
            this.router.navigate(['/']);
          }
          console.log(this.token);

      },error =>{
        this.authStatusListener.next(false);
        console.log(error);
      })
  }

  autoAuthUser(){
    const authInfo = this.getAuthData();
    if(!authInfo){
      return;
    }
    const now = new Date();
    const expiresIn = 3600000
    if(expiresIn > 0){
      this.token = authInfo.token;
      this.AuthStatus = true;
      this.userId = authInfo.userId;
      this.setAuthTimer(expiresIn / 1000) //because .getTime give miliseconds
      this.authStatusListener.next(true);
    }
  }

  getToken(){
    return this.token;
  }

  getUserId(){
    return this.userId;
  }

  getAuthStatus(){
    return this.AuthStatus;
  }

  getAuthStatusSub(){
    return this.authStatusListener.asObservable();
  }

  logOut(){
    this.token =null;
    this.AuthStatus =false;
    this.authStatusListener.next(false);
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.userId =null;
    this.router.navigate(['/']);
  }

  private setAuthTimer(duration:number){
    console.log("AuthTimer" + duration);
    this.tokenTimer = setTimeout(()=>{
      this.logOut();
    },duration*1000);
  }

  private saveAuthData(token:string,userId:string){
    localStorage.setItem('token', token);
    localStorage.setItem('userId',userId);
  }

  private clearAuthData(){
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    localStorage.removeItem("userId");
  }

  private getAuthData(){
    const token = localStorage.getItem("token");
    const userId =localStorage.getItem("userId");
    if(!token ||userId){return;}
    return{
      token:token,
      userId:userId
    }
  }
}

