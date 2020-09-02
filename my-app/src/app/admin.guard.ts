import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { AppContext } from './context';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private context: AppContext, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    let authUser = JSON.parse(localStorage.getItem('user'));
    // console.log(authUser);
    if (authUser && authUser.token && authUser.role === 'admin') {
      return of(true);
    } else {
      this.router.navigate(['access-forbidden']);
      return of(false);
    }
  }
}
