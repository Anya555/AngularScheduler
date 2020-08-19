import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  makeAppointment = (data) => {
    return this.http.post('/api/appointments', data);
  };

  getAllAppointments = () => {
    return this.http.get('/api/appointments');
  };

  deleteAppointment = (id) => {
    console.log(id);
    return this.http.delete('api/appointments/' + id);
  };

  login = (user) => {
    return this.http.post('/api/login', user);
  };
}
