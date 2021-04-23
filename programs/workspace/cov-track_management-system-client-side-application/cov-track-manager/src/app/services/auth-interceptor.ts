import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
//import { AuthService } from "./auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authServ){}

  intercept(req:HttpRequest<any>, next:HttpHandler){
    const authToken =this.authServ.getToken();
    const authRequest = req.clone({
      headers:req.headers.set('Authorization',authToken)
    });

    return next.handle(authRequest);
  }
}
