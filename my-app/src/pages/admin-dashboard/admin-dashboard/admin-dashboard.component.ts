import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../utils/api/api.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AppContext } from '../../../app/context';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    private router: Router,
    private context: AppContext
  ) {}
  appointments: any[];
  filteredAppointments: any[];

  ngOnInit(): void {
    this.displayAllAppointments();
  }

  displayAllAppointments(): void {
    this.apiService.getAllAppointments().subscribe((data: any[]) => {
      console.log(data);
      this.appointments = data;
      this.filteredAppointments = data;
      // convert phone numbers into US format: (000) 000-0000
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

  signOut(): void {
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }

  handleSearch(f: NgForm): void {
    this.filteredAppointments = this.appointments.filter((appointment) =>
      appointment.name.toLowerCase().includes(f.value.search.toLowerCase())
    );
  }

  deleteAppointment(id): void {
    this.apiService.deleteAppointment(id).subscribe(() => {
      this.displayAllAppointments();
    });
  }
}
