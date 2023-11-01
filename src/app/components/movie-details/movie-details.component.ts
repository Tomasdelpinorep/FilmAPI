import { Component,Input,Output,EventEmitter } from '@angular/core';
import { PopularMovie } from 'src/app/models/movie-list';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
@Input() movie! :PopularMovie;
@Output() movieIdEmitter = new EventEmitter<number>();

filmClick(){
this.movieIdEmitter.emit(this.movie.id);
}

setImgURL():string{
  return `https://image.tmdb.org/t/p/w220_and_h330_face${this.movie.poster_path}`
}
}
