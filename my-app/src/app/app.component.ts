import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';

  getUrl() {
    return "url('https://www.freevector.com/uploads/vector/preview/8610/FreeVector-Vector-Background-With-Circles.jpg')";
  }
}
