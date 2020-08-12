import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../../../utils/api/api.service';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

type Option = { text: string; value: number };
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  options: Option[] = [
    { text: '9am', value: 9 },
    { text: '10am', value: 10 },
    { text: '11am', value: 11 },
    { text: '12am', value: 12 },
    { text: '1pm', value: 13 },
    { text: '2pm', value: 14 },
    { text: '3pm', value: 15 },
    { text: '4pm', value: 16 },
    { text: '5pm', value: 17 },
  ];
  appointments: any[];
  filteredOptions: Option[];
  today = new Date();
  fullDate: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.filteredOptions = this.options;
    this.getAll();
    this.fullDate = {
      year: this.today.getFullYear(),
      month: this.today.getMonth() + 1,
      day: this.today.getDate(),
    };
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
      this.filteredOptions = this.options;
      this.getAll();
    });
  }

  filterTime(f: NgForm): void {
    let sameDayAppointments = this.appointments.filter((appointment) => {
      return (
        appointment.date.year === f.value.date.year &&
        appointment.date.month === f.value.date.month &&
        appointment.date.day === f.value.date.day
      );
    });

    this.filteredOptions = this.options.filter(
      (hour) => !sameDayAppointments.some((date) => date.time === hour.value)
    );
  }

  isDisabled = (date: NgbDate, current: { month: number }): boolean => {
    // The value returned by getDay() method is an integer corresponding to the day of the week: 0 for Sunday,
    // 1 for Monday, 2 for Tuesday, 3 for Wednesday, 4 for Thursday, 5 for Friday, 6 for Saturday.
    let sameDayAppointments = this.appointments.filter((appointment) => {
      return (
        appointment.date.year === date.year &&
        appointment.date.month === date.month &&
        appointment.date.day === date.day
      );
    });

    let dateOfTheMonth = new Date(
      date.month + '/' + date.day + '/' + date.year
    );
    let dayOfTheWeek = dateOfTheMonth.getDay();

    return (
      dayOfTheWeek === 0 ||
      dayOfTheWeek === 6 ||
      sameDayAppointments.length === this.options.length
    );
  };
}
