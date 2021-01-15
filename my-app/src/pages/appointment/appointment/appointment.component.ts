import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../utils/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],
})
export class AppointmentComponent implements OnInit {
  appointment: any;
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // change phone number in to us phone format
    this.route.data.subscribe((res) => {
      this.appointment = res.appointment;
      this.appointment.phone =
        '(' +
        this.appointment.phone.substr(0, 3) +
        ') ' +
        this.appointment.phone.substr(3, 3) +
        '-' +
        this.appointment.phone.substr(6);
    });
  }

  deleteAppointment(): void {
    this.apiService.deleteAppointment(this.appointment._id).subscribe(() => {
      this.router.navigate(['cancellation-confirmation']);
    });
  }
}
