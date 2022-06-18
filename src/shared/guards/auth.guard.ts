import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
} from '@angular/router';
import { Observable } from 'rxjs';
// import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        // public jwtHelper: JwtHelperService,
    ) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return this.checkLogin(state.url);
    }

    checkLogin(url: string): boolean {
        const token = localStorage.getItem('token');
        if (token && token.length) {
            // var validToken = this.jwtHelper.isTokenExpired(token);
            // if (validToken) return false;
            return true;
        }
        return true;

    }
}