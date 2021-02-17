import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CarouselComponent } from './carousel.component';

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ CarouselComponent ]
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

  it('shoud get previous', () => {
    component.getPrev();
    expect(component.imageIndex).toBe(-1);
  });

  it('shoud get next', () => {
    component.getNext();
    expect(component.imageIndex).toBe(1);
  });

});
