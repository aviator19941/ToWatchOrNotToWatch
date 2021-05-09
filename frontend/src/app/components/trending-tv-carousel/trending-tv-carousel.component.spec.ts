import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingTvCarouselComponent } from './trending-tv-carousel.component';

describe('TrendingTvCarouselComponent', () => {
  let component: TrendingTvCarouselComponent;
  let fixture: ComponentFixture<TrendingTvCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingTvCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingTvCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
