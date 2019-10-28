import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

export class AuthenticationInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = JSON.parse(localStorage.getItem('authToken'));
        if (token) {
            request = request.clone({
                setHeaders: { 
                    Authorization: token
                }
            });
        }

        return next.handle(request);
    }
}