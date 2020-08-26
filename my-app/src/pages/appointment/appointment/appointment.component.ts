import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../utils/api/api.service';
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],
})
export class AppointmentComponent implements OnInit {
  appointment: any;
  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.route.data.subscribe((res) => {
      this.appointment = res.appointment;
    });
  }

  deleteAppointment(): void {
    this.apiService.deleteAppointment(this.appointment._id).subscribe(() => {
      alert('Your appointment has been deleted');
    });
  }
}
