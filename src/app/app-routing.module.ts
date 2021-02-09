import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartComponent } from './pages/start/start.component';
import { SeriesComponent } from './pages/series/series.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { ChildrenComponent } from './pages/children/children.component';
import { FilteredVideosComponent } from './pages/filtered-videos/filtered-videos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: StartComponent
  },
  {
    path: 'series',
    component: SeriesComponent
  },
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'children',
    component: ChildrenComponent
  },
  {
    path: 'search',
    component: FilteredVideosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
