import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../utils/api/api.service';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  constructor(private apiService: ApiService) {}
  appointments: any[];

  ngOnInit(): void {
    this.apiService.getAllAppointments().subscribe((data: any[]) => {
      this.appointments = data;
      // format phone numbers into US format
      this.appointments.forEach((appointment) => {
        appointment.phone =
          '(' +
          appointment.phone.substr(0, 3) +
          ') ' +
          appointment.phone.substr(3, 3) +
          '-' +
          appointment.phone.substr(6);
      });
    });
  }
}
