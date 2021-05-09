import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopratedTvCarouselComponent } from './toprated-tv-carousel.component';

describe('TopratedTvCarouselComponent', () => {
  let component: TopratedTvCarouselComponent;
  let fixture: ComponentFixture<TopratedTvCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopratedTvCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopratedTvCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
