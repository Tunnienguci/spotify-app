import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  baseUrl = 'https://api.spotify.com/v1/';
  constructor(private http: HttpClient) {}

  search(query: string): Observable<any> {
    return this.http.get(
      `${this.baseUrl}search?q=${query}&type=track,artist,album,playlist&market=VN&limit=4`
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
