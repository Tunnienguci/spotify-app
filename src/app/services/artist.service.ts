import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ArtistService {
  constructor(private http: HttpClient) {}

  getCategory() {
    return this.http.get(
      'https://api.spotify.com/v1/browse/categories?locale=en_US&country=VN&limit=8&offset=5'
    );
  }

  getMyPlaylist() {
    return this.http.get('https://api.spotify.com/v1/me/playlists');
  }
}
