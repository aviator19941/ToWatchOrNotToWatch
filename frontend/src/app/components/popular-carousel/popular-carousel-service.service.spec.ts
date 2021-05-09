import { TestBed } from '@angular/core/testing';

import { PopularCarouselServiceService } from './popular-carousel-service.service';

describe('PopularCarouselServiceService', () => {
  let service: PopularCarouselServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopularCarouselServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
