import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MylistComponent } from './components/mylist/mylist.component';
import { MovieComponent } from './components/movie/movie.component';
import { TvComponent } from './components/tv/tv.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'mylist', component: MylistComponent },
  { path: 'watch/movie/:id', component: MovieComponent },
  { path: 'watch/tv/:id', component: TvComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
