import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  makeAppointment = (data) => {
    return this.http.post('http://localhost:3001/api/appointments', data);
  };

  getAllAppointments = () => {
    return this.http.get('http://localhost:3001/api/appointments');
  };
}
