import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './ui/home-page/home-page.component';
import { PageNotFoundComponent } from './ui/page-not-found/page-not-found.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { DetailsPageComponent } from './ui/details-page/details-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'list', component: MovieListComponent},
  { path: 'movie/:id', component: DetailsPageComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
