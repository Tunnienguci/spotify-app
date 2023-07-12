import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  getDate() {
    if (new Date().getHours() >= 0 && new Date().getHours() < 12) {
      return 'Good Morning';
    }
    if (new Date().getHours() >= 12 && new Date().getHours() < 18) {
      return 'Good Afternoon';
    }
    if (new Date().getHours() >= 18 && new Date().getHours() < 24) {
      return 'Good Evening';
    }
  }
}
