import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopratedCarouselComponent } from './toprated-carousel.component';

describe('TopratedCarouselComponent', () => {
  let component: TopratedCarouselComponent;
  let fixture: ComponentFixture<TopratedCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopratedCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopratedCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
