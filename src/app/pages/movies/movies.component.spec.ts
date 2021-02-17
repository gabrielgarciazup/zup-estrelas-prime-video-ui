import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MoviesComponent } from './movies.component';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { CarouselComponent } from 'src/app/carousel/carousel.component';
import { VideoSectionComponent } from 'src/app/video-section/video-section.component';
import { FormsModule } from '@angular/forms';

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [
      HttpClientTestingModule,
      FormsModule
    ],
      declarations: [
        MoviesComponent,
        NavbarComponent,
        CarouselComponent,
        VideoSectionComponent
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
