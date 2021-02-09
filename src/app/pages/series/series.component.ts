import { Component, OnInit, Input } from '@angular/core';

import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

  nowPlayingMovies: any = {
    results: []
  }

  popularMovies: any = {
    results: []
  }

  topRatedMovies: any = {
    results: []
  }

  upcomingMovies: any = {
    results: []
  }
  
  constructor(public apiService: ApiService) { }

  ngOnInit(): void {

    this.getNowPlaying();

    this.getPopularMovies();

    this.getTopRatedMovies();

    this.getUpcomingMovies();

  }

  getNowPlaying() {

    this.apiService.get("movie/now_playing")
      .subscribe((val) => {

        this.nowPlayingMovies = val;
        console.log("Valor: ", val);

      }, (response) => {

      }, () => {

      });

  }

  getPopularMovies() {

    this.apiService.get("movie/popular")
      .subscribe((val) => {

        this.popularMovies = val;
        console.log("Valor: ", val);

      }, (response) => {

      }, () => {

      });

  }

  getTopRatedMovies() {

    this.apiService.get("movie/top_rated")
      .subscribe((val) => {

        this.topRatedMovies = val;
        console.log("Valor: ", val);

      }, (response) => {

      }, () => {

      });

  }

  getUpcomingMovies() {

    this.apiService.get("movie/upcoming")
      .subscribe((val) => {

        this.upcomingMovies = val;
        console.log("Valor: ", val);

      }, (response) => {

      }, () => {

      });

  }

}
