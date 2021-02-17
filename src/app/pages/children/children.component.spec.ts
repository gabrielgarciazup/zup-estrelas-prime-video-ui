import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ChildrenComponent } from './children.component';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { CarouselComponent } from 'src/app/carousel/carousel.component';
import { VideoSectionComponent } from 'src/app/video-section/video-section.component';
import { FormsModule } from '@angular/forms';

describe('ChildrenComponent', () => {
  let component: ChildrenComponent;
  let fixture: ComponentFixture<ChildrenComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        FormsModule
      ],
      declarations: [
        ChildrenComponent,
        NavbarComponent,
        CarouselComponent,
        VideoSectionComponent
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
