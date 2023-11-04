import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PopularMoviesResponse } from '../models/movie-list';
import { MovieDetailsResponse } from '../models/movie-details';
import { MovieVideoResponse } from '../models/movie-videos';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getPopularMoviesList(page: number): Observable<PopularMoviesResponse> {
    return this.http.get<PopularMoviesResponse>(
      `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=fba6287e1b5585e45727ead4703af755`
    );
  }

  getMovieDetails(id: number): Observable<MovieDetailsResponse> {
    return this.http.get<MovieDetailsResponse>(
      `https://api.themoviedb.org/3/movie/${id}?api_key=fba6287e1b5585e45727ead4703af755`
    );
  }

  getTopRatedList() {
    return this.http.get<PopularMoviesResponse>(
      'https://api.themoviedb.org/3/movie/top_rated?api_key=fba6287e1b5585e45727ead4703af755'
    );
  }

  getMovieVideos(movieId: number): Observable<MovieVideoResponse> {
    return this.http.get<MovieVideoResponse>(`
    https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=fba6287e1b5585e45727ead4703af755`);
  }
}
