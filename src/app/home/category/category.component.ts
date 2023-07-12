import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  category: any;
  constructor(private ArtistServices: ArtistService) {
    this.ArtistServices.getCategory().subscribe((data: any) => {
      this.category = data['categories']['items'];
    });
  }

  ngOnInit(): void {}
}
