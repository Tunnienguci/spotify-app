import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'app-preview-list',
  templateUrl: './preview-list.component.html',
  styleUrls: ['./preview-list.component.scss'],
})
export class PreviewListComponent implements OnInit {
  playlist: any;
  constructor(private ArtistServices: ArtistService) {
    this.ArtistServices.getMyPlaylist().subscribe((data) => {
      this.playlist = data['items'];
      // limit 6
      this.playlist = this.playlist.slice(0, 6);
    });
  }

  ngOnInit(): void {}
}
