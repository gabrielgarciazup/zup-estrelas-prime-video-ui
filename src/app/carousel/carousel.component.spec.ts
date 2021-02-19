import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CarouselComponent } from './carousel.component';

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [CarouselComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shoud get previous image position when it is not the first', () => {
    component.imageIndex = 2;
    component.data.results.length = 3;

    component.getPrev();
    expect(component.imageIndex).toBe(1);
  });

  it('shoud get previous image position when it is the first', () => {
    component.imageIndex = 0;
    component.data.results.length = 3;

    component.getPrev();
    expect(component.imageIndex).toBe(2);
  });

  it('shoud get next image position', () => {
    component.getNext();
    expect(component.imageIndex).toBe(1);
  });

  it('should get the first position after the last', () => {
    component.imageIndex = 2;
    component.data.results.length = 3;

    component.getNext();
    expect(component.imageIndex).toBe(0);
  });

});
