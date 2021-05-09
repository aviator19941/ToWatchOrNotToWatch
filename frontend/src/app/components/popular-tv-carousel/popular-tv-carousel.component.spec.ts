import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularTvCarouselComponent } from './popular-tv-carousel.component';

describe('PopularTvCarouselComponent', () => {
  let component: PopularTvCarouselComponent;
  let fixture: ComponentFixture<PopularTvCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularTvCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularTvCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
