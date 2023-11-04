import { Component,Input } from '@angular/core';
import { PopularMovie } from 'src/app/models/movie-list';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
@Input() movie! :PopularMovie;


setImgURL():string{
  return `https://image.tmdb.org/t/p/w220_and_h330_face${this.movie.poster_path}`
}
}
