import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ArtistService {
  constructor(private http: HttpClient) {}

  getShow() {
    return this.http.get(
      'https://api.spotify.com/v1/browse/new-releases?limit=12'
    );
  }

  getMyPlaylist() {
    return this.http.get('https://api.spotify.com/v1/me/playlists');
  }
}
