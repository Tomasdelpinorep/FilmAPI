import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomePageComponent } from './ui/home-page/home-page.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { TopRatedListComponent } from './components/top-rated-list/top-rated-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DetailsPageComponent } from './ui/details-page/details-page.component';
import { PageNotFoundComponent } from './ui/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MovieDetailsComponent,
    MovieListComponent,
    TopRatedListComponent,
    DetailsPageComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
