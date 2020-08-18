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
  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {}

  login(f: NgForm): void {
    this.apiService.login(f.value).subscribe((response: any) => {
      localStorage.setItem('AuthToken', `Bearer ${response.token}`);
      console.log(response);
      if (
        response.token &&
        response.userId === 'fXVAcjh721e0i9SBdQEV6hXpKU43'
      ) {
        this.router.navigate(['admin-dashboard']);
      }
    });
  }
}
