import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCatalogueComponent } from './video-section.component';

describe('VideoCatalogueComponent', () => {
  let component: VideoCatalogueComponent;
  let fixture: ComponentFixture<VideoCatalogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoCatalogueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
