import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  baseUrl = 'https://api.spotify.com/v1/';
  constructor(private http: HttpClient) {}

  search(query: string) {
    return this.http.get(
      `${this.baseUrl}search?q=${query}&type=album%2Cplaylist%2Ctrack%2Cartist&market=VN&limit=4&include_external=audio`
    );
  }

  getArtist(id: string) {
    return this.http.get(`${this.baseUrl}artists/${id}`);
  }

  getAlbums(id: string) {
    return this.http.get(
      `${this.baseUrl}artists/${id}/albums?include_groups=album&market=VN&limit=5`
    );
  }

  getTopTracks(id: string) {
    return this.http.get(`${this.baseUrl}artists/${id}/top-tracks?market=VN`);
  }

  getAlbumTracks(id: string) {
    return this.http.get(`${this.baseUrl}albums/${id}/tracks?market=VN`);
  }

  getAlbum(id: string) {
    return this.http.get(`${this.baseUrl}albums/${id}`);
  }

  getPlaylist(id: string) {
    return this.http.get(`${this.baseUrl}playlists/${id}`);
  }
}
