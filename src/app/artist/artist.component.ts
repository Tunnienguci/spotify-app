import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
})
export class ArtistComponent implements OnInit {
  item: any;
  id: string;
  constructor(private route: ActivatedRoute, searchService: SearchService) {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      searchService.getArtist(this.id).subscribe((data: any) => {
        this.item = data;
        searchService.getAlbums(this.id).subscribe((data: any) => {
          this.item.albums = data.items;
        });
        searchService.getTopTracks(this.id).subscribe((data: any) => {
          this.item.tracks = data.tracks;
        });
      });
    });
  }

  ngOnInit(): void {}
}
