import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './commons/navbar/navbar.component';
import { FooterComponent } from './commons/footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ArtistComponent } from './artist/artist.component';
import { SearchComponent } from './search/search.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { TextLengthPipe } from './pipes/text-length.pipe';
import { ToMinutesSecondPipe } from './pipes/to-minutes-second.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { CategoryComponent } from './home/category/category.component';
import { PreviewListComponent } from './home/preview-list/preview-list.component';
import { AlbumComponent } from './album/album.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    WelcomeComponent,
    HomeComponent,
    ProfileComponent,
    ArtistComponent,
    SearchComponent,
    PlaylistComponent,
    TextLengthPipe,
    ToMinutesSecondPipe,
    CategoryComponent,
    PreviewListComponent,
    AlbumComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
