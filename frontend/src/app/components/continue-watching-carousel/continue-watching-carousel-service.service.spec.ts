import { TestBed } from '@angular/core/testing';

import { ContinueWatchingCarouselServiceService } from './continue-watching-carousel-service.service';

describe('ContinueWatchingCarouselServiceService', () => {
  let service: ContinueWatchingCarouselServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContinueWatchingCarouselServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
