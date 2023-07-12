import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
})
export class AlbumComponent implements OnInit {
  item: any;
  albumList: any;
  constructor(private route: ActivatedRoute, searchService: SearchService) {
    this.route.params.subscribe((params) => {
      searchService.getAlbum(params['id']).subscribe((data: any) => {
        this.item = data;
        this.albumList = data.tracks.items;
        console.log(this.albumList);
      });
    });
  }

  ngOnInit(): void {}
}
