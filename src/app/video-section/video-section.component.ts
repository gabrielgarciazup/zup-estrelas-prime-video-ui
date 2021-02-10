import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-video-section',
  templateUrl: './video-section.component.html',
  styleUrls: ['./video-section.component.scss']
})
export class VideoSectionComponent implements OnInit {

  @Input() sectionTitle: string;
  @Input() movies: any;

  imagesUrl = environment.imageUrl;

  constructor(public apiService: ApiService) { }

  ngOnInit(): void { }
  
}
