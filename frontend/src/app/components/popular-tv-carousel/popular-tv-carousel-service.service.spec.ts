import { TestBed } from '@angular/core/testing';

import { PopularTvCarouselServiceService } from './popular-tv-carousel-service.service';

describe('PopularTvCarouselServiceService', () => {
  let service: PopularTvCarouselServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopularTvCarouselServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
