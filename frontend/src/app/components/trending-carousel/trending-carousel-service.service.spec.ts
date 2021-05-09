import { TestBed } from '@angular/core/testing';

import { TrendingCarouselServiceService } from './trending-carousel-service.service';

describe('TrendingCarouselServiceService', () => {
  let service: TrendingCarouselServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrendingCarouselServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
