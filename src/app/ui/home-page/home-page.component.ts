import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MovieDetailsResponse } from 'src/app/models/movie-details';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
constructor(private movieService: MovieService, private modalService: NgbModal){}
selectedMovie!: MovieDetailsResponse;

open(movieId:number, modal:any ){
this.movieService.getMovieDetails(movieId).subscribe(resp =>{
  this.selectedMovie = resp;
  this.modalService.open(modal);
})
}
}
