import { TestBed } from '@angular/core/testing';

import { TopratedTvCarouselServiceService } from './toprated-tv-carousel-service.service';

describe('TopratedTvCarouselServiceService', () => {
  let service: TopratedTvCarouselServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopratedTvCarouselServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
