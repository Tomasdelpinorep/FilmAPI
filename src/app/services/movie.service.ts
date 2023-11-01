import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'   
import { PopularMoviesResponse } from '../models/movie-list';
import { MovieDetailsResponse } from '../models/movie-details';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getPopularMoviesList() :Observable<PopularMoviesResponse>{
    return this.http.get<PopularMoviesResponse>("https://api.themoviedb.org/3/movie/popular?api_key=0bd26e9f09dfb5078ef2f3aeec479c55");
  }

  getMovieDetails(id:number):Observable<MovieDetailsResponse>{
    return this.http.get<MovieDetailsResponse>(`https://api.themoviedb.org/3/movie/${id}?api_key=0bd26e9f09dfb5078ef2f3aeec479c55`);
  }

  getTopRatedList(){
    return this.http.get<PopularMoviesResponse>("https://api.themoviedb.org/3/movie/top_rated?api_key=0bd26e9f09dfb5078ef2f3aeec479c55");
  }
}

