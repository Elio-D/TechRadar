import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private userService: UsersService) { }
  intercept(req: any, next: any) {
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.userService.getToken()}`
      }
    });
    return next.handle(tokenizedReq);
  }
}
