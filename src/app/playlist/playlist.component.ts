import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss'],
})
export class PlaylistComponent implements OnInit {
  item: any;
  trackList: any;
  constructor(
    private route: ActivatedRoute,
    private searchServices: SearchService
  ) {
    this.route.params.subscribe((params) => {
      this.searchServices.getPlaylist(params['id']).subscribe((data: any) => {
        this.item = data;
        this.trackList = data.tracks.items;
        console.log(this.item);
      });
    });
  }

  ngOnInit(): void {}
}
