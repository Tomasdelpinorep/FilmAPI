import { Component, inject, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { MovieDetailsResponse } from 'src/app/models/movie-details';
import { Video } from 'src/app/models/movie-videos';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit{
  route: ActivatedRoute = inject(ActivatedRoute);
  movieId!:number;
  movie!:MovieDetailsResponse;
  movieVideos: Video[] = [];
  trailers:SafeResourceUrl[] = [];

  constructor(private movieService: MovieService, private sanitizer:DomSanitizer){
    this.movieId = Number(this.route.snapshot.params['id']);
  }
  ngOnInit(): void {
    this.movieService.getMovieDetails(this.movieId).subscribe(resp => {
      this.movie = resp;
    })

    this.getTrailers();
  }

  setImgURL():string{
    return `https://image.tmdb.org/t/p/w220_and_h330_face${this.movie.poster_path}`
  }
  
  getReleaseYear(){
    return this.movie.release_date.split('-')[0];
  }

  isAdult(){
    if(this.movie.adult)
      return "Yes";

    return "No";
  }

  getGenres(){
    var result = "";
    var genreString = "";

    for(var genre of this.movie.genres){
      genreString = genre.name;
      result = result.concat(genreString).concat(", ")
    }
    return result.trim().slice(0,-1);
  }

  getTrailers(){
    var trailerURL;
    this.movieService.getMovieVideos(this.movieId).subscribe(resp => {
      this.movieVideos = resp.results;

      for(var video of this.movieVideos){
        if(video.type == "Trailer"){
          this.trailers.push(this.getSafeVideoUrl("https://www.youtube.com/embed/" + video.key));
        }
      }
    })
  }

  getSafeVideoUrl(videoUrl: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
  }

}
