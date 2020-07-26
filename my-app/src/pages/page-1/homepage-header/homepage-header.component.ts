import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-homepage-header',
  templateUrl: './homepage-header.component.html',
  styleUrls: ['./homepage-header.component.css'],
})
export class HomepageHeaderComponent implements OnInit {
  @Input() title: string;

  constructor() {}

  ngOnInit(): void {}
}
