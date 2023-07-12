import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchResultsTrack: any;
  searchResultsArtist: any;
  searchResultsAlbum: any;
  searchResultsPlaylist: any;
  searchItem: string = '';
  constructor(private searchServices: SearchService) {}

  ngOnInit(): void {}
  search() {
    if (this.searchItem == '' || this.searchItem == null) {
      this.reset();
    }
    this.searchServices.search(this.searchItem).subscribe((data: any) => {
      this.searchResultsArtist = data['artists']['items'];
      this.searchResultsAlbum = data['albums']['items'];
      this.searchResultsPlaylist = data['playlists']['items'];
    });
  }

  reset() {
    this.searchResultsTrack = [];
    this.searchResultsArtist = [];
    this.searchResultsAlbum = [];
    this.searchResultsPlaylist = [];
  }
}
