import { TestBed } from '@angular/core/testing';

import { TopratedCarouselServiceService } from './toprated-carousel-service.service';

describe('TopratedCarouselServiceService', () => {
  let service: TopratedCarouselServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopratedCarouselServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
