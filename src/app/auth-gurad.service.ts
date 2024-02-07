import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, CanActivateChildFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServices } from './auth.service';
@Injectable()
export class AuthGuard implements CanActivateChild {
    constructor(private authService: AuthServices, private router: Router) { }


    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.authService.isAuthenticated()
            .then( 
                (authenticated: boolean) => {
                    if (authenticated) {
                        return true;
                    }
                    else {
                        return this.router.navigate(['/'])
                    }
                }
            )
    }
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.canActivate(childRoute, state)
    }


}

