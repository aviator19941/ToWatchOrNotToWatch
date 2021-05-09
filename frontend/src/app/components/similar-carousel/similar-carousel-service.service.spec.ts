import { TestBed } from '@angular/core/testing';

import { SimilarCarouselServiceService } from './similar-carousel-service.service';

describe('SimilarCarouselServiceService', () => {
  let service: SimilarCarouselServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimilarCarouselServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
