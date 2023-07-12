import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  User: any;
  constructor(
    private authServices: AuthService,
    private profileService: ProfileService
  ) {
    this.profileService.getProfile().subscribe((data) => {
      this.User = data;
      console.log(this.User);
    });
  }

  ngOnInit(): void {}

  isLoggedIn() {
    return this.authServices.isLoggedIn();
  }

  logout() {
    this.authServices.logout();
  }

  login() {
    console.log('login');
    this.authServices.login();
  }
}
