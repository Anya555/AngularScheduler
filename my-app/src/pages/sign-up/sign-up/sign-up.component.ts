import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../../../utils/api/api.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  // signup only needed to create admin user
  signup(f: NgForm): void {
    this.apiService.signup(f.value).subscribe((res: any) => {});
  }
}
