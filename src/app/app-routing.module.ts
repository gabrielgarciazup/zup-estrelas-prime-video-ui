import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartComponent } from './pages/start/start.component';
import { SeriesComponent } from './pages/series/series.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { ChildrenComponent } from './pages/children/children.component';
import { FilteredVideosComponent } from './pages/filtered-videos/filtered-videos.component';
import { AuthComponent } from './pages/auth/auth.component';
import { AuthGuard } from './pages/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: 'home',
    component: StartComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'series',
    component: SeriesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'movies',
    component: MoviesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'children',
    component: ChildrenComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'search',
    component: FilteredVideosComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
