import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = 'https://accounts.spotify.com/authorize';
  token: string = '';
  client_id: string = 'b3367fa6e0ad4cdfa803f930d8f8b8cb';
  client_secret: string = '22cc9fd47ccb4164976531e126056a71';
  callback: string = 'https://top-spotify.vercel.app/home';

  constructor(private router: Router) {
    this.token = localStorage.getItem('token') || '';
    if (window.location.hash) {
      const hash = window.location.hash.substring(1);
      const params = new URLSearchParams(hash);
      this.token = params.get('access_token') || '';
      localStorage.setItem('token', this.token);
      this.router.navigate(['/home']);
    }
  }

  isLoggedIn() {
    return typeof this.token === 'string' && this.token.length > 0;
  }

  logout() {
    localStorage.removeItem('token');
    this.token = '';
    this.router.navigate(['/']);
  }

  getToken() {
    return this.token;
  }

  login() {
    window.location.href =
      'https://accounts.spotify.com/authorize?client_id=' +
      this.client_id +
      '&response_type=token&redirect_uri=' +
      this.callback +
      '&scope=user-read-private%20user-read-email%20user-top-read%20playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20playlist-modify-private&show_dialog=true ';
  }
}
