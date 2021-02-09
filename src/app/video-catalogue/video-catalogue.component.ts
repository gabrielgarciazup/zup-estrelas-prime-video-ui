import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-video-catalogue',
  templateUrl: './video-catalogue.component.html',
  styleUrls: ['./video-catalogue.component.scss']
})
export class VideoCatalogueComponent implements OnInit {

  @Input() catalogueTitle: string;
  @Input() movies: any;

  imagesUrl = environment.imageUrl;

  constructor(public apiService: ApiService) { }

  ngOnInit(): void { }
  
}
