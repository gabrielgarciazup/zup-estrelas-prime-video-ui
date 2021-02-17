import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { FilteredVideosComponent } from './filtered-videos.component';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { CarouselComponent } from 'src/app/carousel/carousel.component';
import { VideoSectionComponent } from 'src/app/video-section/video-section.component';
import { FormsModule } from '@angular/forms';

describe('FilteredVideosComponent', () => {
  let component: FilteredVideosComponent;
  let fixture: ComponentFixture<FilteredVideosComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        FormsModule
      ],
      declarations: [
        FilteredVideosComponent,
        NavbarComponent,
        CarouselComponent,
        VideoSectionComponent
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteredVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
