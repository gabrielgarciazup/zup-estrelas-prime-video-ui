import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images: string[] = [
    './assets/images/jpg/carousel_1.jpg',
    './assets/images/jpg/carousel_2.jpg'
  ];

  imageIndex = 0;

  getImage() {
    return this.images[this.imageIndex];
  }

  getPrev() {
    this.imageIndex = this.imageIndex === 0 ? this.images.length - 1 : this.imageIndex - 1;
  }

  getNext() {

    if (this.imageIndex === this.images.length - 1) {
      this.imageIndex = 0;
      return;
    }

    this.imageIndex = this.imageIndex + 1;
  }

}
