import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../../../utils/api/api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  options: ['9am', '10am', '11am'];
  constructor(private apiService: ApiService) {}
  onSubmit(f: NgForm) {
    this.apiService.makeAppointment(f.value).subscribe((data) => {
      console.log(data);
    });
  }
  ngOnInit(): void {
    this.apiService.getAllAppointments().subscribe((data) => {
      console.log(data);
    });
  }
}
