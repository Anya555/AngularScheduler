import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../../../utils/api/api.service';
import { Router } from '@angular/router';
import { AppContext } from 'src/app/context';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  error: string;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private context: AppContext
  ) {}

  ngOnInit(): void {}

  login(f: NgForm): void {
    this.apiService.login(f.value).subscribe(
      (res: any) => {
        let authorizedUser = {
          authToken: `Bearer ${res.token}`,
          role: res.user.role,
        };
        localStorage.setItem('user', JSON.stringify(authorizedUser));
        this.context.admin = res;
        if (res.token && res.user.role === 'admin') {
          this.router.navigate(['admin-dashboard']);
        }
      },
      (err) => (this.error = err.error.general)
    );
  }
}
