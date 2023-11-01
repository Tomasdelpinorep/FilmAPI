import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TopRatedMovie } from 'src/app/models/top-rated-list';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-top-rated-list',
  templateUrl: './top-rated-list.component.html',
  styleUrls: ['./top-rated-list.component.css']
})
export class TopRatedListComponent {
  constructor(private movieService :MovieService){}
  @Output() movieIdEmitter = new EventEmitter<number>;

  movieList! :TopRatedMovie[];

ngOnInit():void{
  this.movieService.getTopRatedList().subscribe(resp => {
    this.movieList = resp.results;
  })
}

seeDetails(id:number){
  this.movieIdEmitter.emit(id);
}
}
