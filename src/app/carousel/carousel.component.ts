import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  data: any = {
    results: []
  }

  images: string[] = [];

  imageIndex = 0;

  constructor(private apiService: ApiService) {

    apiService.get("movie/popular")
      .subscribe((val) => {

        this.data = val;

      }, (response) => {

      }, () => {

      });
  }

  ngOnInit(): void {
  }


  getImage() {
    return this.data.results.length === 0 ? '' 
    : environment.imageUrl + this.data.results[this.imageIndex].backdrop_path;
  }

  getPrev() {
    this.imageIndex = this.imageIndex === 0 ? this.data.results.length - 1 : this.imageIndex - 1;
  }

  getNext() {

    if (this.imageIndex === this.data.results.length - 1) {
      this.imageIndex = 0;
      return;
    }

    this.imageIndex = this.imageIndex + 1;
  }

}
