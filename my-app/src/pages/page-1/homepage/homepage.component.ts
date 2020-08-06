import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../../../utils/api/api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  options: string[] = [
    '9am',
    '10am',
    '11am',
    '12am',
    '1pm',
    '2pm',
    '3pm',
    '4pm',
    '5pm',
  ];
  appointments: any[];
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.apiService.getAllAppointments().subscribe((data: any[]) => {
      this.appointments = data;
    });
  }

  onSubmit(f: NgForm) {
    this.apiService.makeAppointment(f.value).subscribe((data) => {
      console.log(data);
      f.resetForm();
    });
  }

  filterTime(f: NgForm): void {
    let dates = this.appointments.filter((appointment) => {
      return (
        appointment.date.year === f.value.date.year &&
        appointment.date.month === f.value.date.month &&
        appointment.date.day === f.value.date.day
      );
    });
    this.options = this.options.filter(
      (hour) => !dates.some((date) => date.time === hour)
    );
    this.getAll();
  }
}
