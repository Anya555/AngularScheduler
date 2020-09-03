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
    this.apiService.login(f.value).subscribe((res: any) => {
      console.log('login');
      let authorizedUser = {
        token: res.accessToken,
        role: res.data.role,
      };
      localStorage.setItem('user', JSON.stringify(authorizedUser));
      this.context.admin = res;

      if (
        this.context.admin.accessToken &&
        this.context.admin.data.role === 'admin'
      ) {
        this.router.navigate(['admin-dashboard']);
      }
    });
  }
}
