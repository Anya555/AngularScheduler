import { Injectable } from '@angular/core';
import { AppContext } from './context';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ContextResolver implements Resolve<AppContext> {
  constructor(private context: AppContext) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    let authUser = JSON.parse(localStorage.getItem('user')) || {};
    this.context.admin = { accessToken: authUser.token, role: authUser.role };

    return this.context;
  }
}
