import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-filtered-videos',
  templateUrl: './filtered-videos.component.html',
  styleUrls: ['./filtered-videos.component.scss']
})
export class FilteredVideosComponent implements OnInit {

  imagesUrl = environment.imageUrl;
  defaultImage = 'assets/images/jpg/defaultImage.jpg';

  filteredVideos: any = {
    results: []
  }

  amountOfVideos = this.filteredVideos.results.length;

  constructor(public apiService: ApiService) { }

  ngOnInit(): void {
  }

  filteredVideosInput
  receiveInputValue($event) {
    this.filteredVideosInput = $event;
    console.log(this.filteredVideosInput);
    
    this.getFilteredVideos();
  }

  getFilteredVideos() {

    this.apiService.getFiltered("search/movie", this.filteredVideosInput)
      .subscribe((val) => {

        this.filteredVideos = val;
        this.amountOfVideos = this.filteredVideos.results.length;

        console.log("Keyword: ", val);

      }, (response) => {

      }, () => {

      });


  }

}
