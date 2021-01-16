import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppContext } from 'src/app/context';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient, private context: AppContext) {}

  makeAppointment = (data) => {
    return this.http.post('/api/appointments', data);
  };

  getAppointmentsForAdmin = () => {
    return this.http.get('/api/appointments');
  };

  getAllAppointments = () => {
    return this.http.get('/api/appointments/getAll');
  };

  deleteAppointment = (id) => {
    return this.http.delete('/api/appointments/' + id);
  };

  login = (user) => {
    return this.http.post('/api/users/login', user);
  };

  signup = (user) => {
    return this.http.post('/api/users/signup', user);
  };

  sendEmailConfirmation = (message) => {
    return this.http.post('/api/nodemailer', message);
  };

  findAppointment = (id) => {
    return this.http.get('/api/appointments/' + id);
  };
}
