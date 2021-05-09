import { TestBed } from '@angular/core/testing';

import { TrendingTvCarouselServiceService } from './trending-tv-carousel-service.service';

describe('TrendingTvCarouselServiceService', () => {
  let service: TrendingTvCarouselServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrendingTvCarouselServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
