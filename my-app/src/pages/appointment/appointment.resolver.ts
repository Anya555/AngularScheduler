import { Injectable } from '@angular/core';
import { ApiService } from '../../utils/api/api.service';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AppointmentResolver implements Resolve<any> {
  constructor(private apiService: ApiService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    let id = route.params.id;

    return this.apiService.findAppointment(id);
  }
}
