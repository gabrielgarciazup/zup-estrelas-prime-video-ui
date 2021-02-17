import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { StartComponent } from './start.component';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { CarouselComponent } from 'src/app/carousel/carousel.component';
import { VideoSectionComponent } from 'src/app/video-section/video-section.component';
import { FormsModule } from '@angular/forms';

describe('StartComponent', () => {
  let component: StartComponent;
  let fixture: ComponentFixture<StartComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [ 
        HttpClientTestingModule,
        FormsModule
      ],
      declarations: [ 
        StartComponent,
        NavbarComponent,
        CarouselComponent,
        VideoSectionComponent
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
