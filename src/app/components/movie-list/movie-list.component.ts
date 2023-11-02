import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PopularMovie } from 'src/app/models/movie-list';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent {
  movieList!: PopularMovie[];
  @Output() movieIdEmitter = new EventEmitter<number>();
  constructor(private movieService: MovieService) {}
  currentPage = 1;

  ngOnInit(): void {
    this.movieService.getPopularMoviesList(this.currentPage).subscribe((resp) => {
      this.movieList = resp.results;
    });
  }

  seeDetails(movieId:number){
    this.movieIdEmitter.emit(movieId);
  }

  loadNewPage(): void{
    this.movieService.getPopularMoviesList(this.currentPage).subscribe(resp => {this.movieList = resp.results});
  }
}
