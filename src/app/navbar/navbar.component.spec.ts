import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { NavbarComponent } from './navbar.component';
import { FormsModule } from '@angular/forms';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        FormsModule
      ],
      declarations: [
        NavbarComponent
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return the input on keyup', () => {
    spyOn(component.keyUpEvent, 'emit');

    component.onKeyUp();

    expect(component.keyUpEvent.emit).toHaveBeenCalled();
    expect(component.keyUpEvent.emit).toHaveBeenCalledWith(component.filteredVideosInput);
  });

  it('should not return when keyup were not called', () => {
    spyOn(component.keyUpEvent, 'emit');

    expect(component.keyUpEvent.emit).not.toHaveBeenCalled();
    expect(component.keyUpEvent.emit).not.toHaveBeenCalledWith(component.filteredVideosInput);
  });
  
});
