import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient, auth: AuthService) {
    console.log(auth.getToken());
  }

  getProfile() {
    return this.http.get('https://api.spotify.com/v1/me');
  }

  getPlaylists() {
    return this.http.get('https://api.spotify.com/v1/me/playlists');
  }

  getTopTracks() {
    return this.http.get('https://api.spotify.com/v1/me/top/tracks');
  }
}
