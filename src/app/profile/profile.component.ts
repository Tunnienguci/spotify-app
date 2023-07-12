import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user: any;
  topTracks: any;
  constructor(private userServices: ProfileService) {
    this.userServices.getProfile().subscribe((user) => {
      console.log(user);
      this.user = user;
      this.userServices.getTopTracks().subscribe((topTracks) => {
        console.log(topTracks);
        this.topTracks = topTracks['items'];
      });
    });
  }

  ngOnInit(): void {}
}
