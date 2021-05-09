import { TestBed } from '@angular/core/testing';

import { MylistServiceService } from './mylist-service.service';

describe('MylistServiceService', () => {
  let service: MylistServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MylistServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
