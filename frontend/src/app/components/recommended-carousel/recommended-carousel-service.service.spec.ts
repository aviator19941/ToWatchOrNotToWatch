import { TestBed } from '@angular/core/testing';

import { RecommendedCarouselServiceService } from './recommended-carousel-service.service';

describe('RecommendedCarouselServiceService', () => {
  let service: RecommendedCarouselServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecommendedCarouselServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
