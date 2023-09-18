import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  show: any;
  constructor(private ArtistServices: ArtistService) {
    this.ArtistServices.getShow().subscribe((data) => {
      this.show = data['albums'].items;
      console.log(this.show);
    });
  }

  ngOnInit(): void {}
}
