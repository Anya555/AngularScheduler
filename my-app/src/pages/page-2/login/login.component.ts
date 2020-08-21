import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../../../utils/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  error: string;
  admin: object;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {}

  login(f: NgForm): void {
    this.apiService.login(f.value).subscribe(
      (res: any) => {
        localStorage.setItem('AuthToken', `Bearer ${res.token}`);
        this.admin = res;
        if (res.token && res.user.role === 'admin') {
          this.router.navigate(['admin-dashboard']);
        }
      },
      (err) => (this.error = err.error.general)
    );
  }
}
