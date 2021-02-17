import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SeriesComponent } from './series.component';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { CarouselComponent } from 'src/app/carousel/carousel.component';
import { VideoSectionComponent } from 'src/app/video-section/video-section.component';
import { FormsModule } from '@angular/forms';

describe('SeriesComponent', () => {
  let component: SeriesComponent;
  let fixture: ComponentFixture<SeriesComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [ 
        HttpClientTestingModule,
        FormsModule
      ],
      declarations: [
        SeriesComponent,
        NavbarComponent,
        CarouselComponent,
        VideoSectionComponent
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
