import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { ArtistComponent } from './artist/artist.component';
import { ProfileComponent } from './profile/profile.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { AuthGuard } from './guard/auth.guard';
import { SearchComponent } from './search/search.component';
import { AlbumComponent } from './album/album.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'explore',
    component: SearchComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'artist/:id',
    component: ArtistComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'album/:id',
    component: AlbumComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'playlist/:id',
    component: PlaylistComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'playlists',
        component: PlaylistComponent,
      },
    ],
  },
  // {
  //   path: '**',
  //   redirectTo: '',
  //   pathMatch: 'full',
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
