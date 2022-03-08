import { TestBed } from '@angular/core/testing';

import { ServeviceService } from './servevice.service';

describe('ServeviceService', () => {
  let service: ServeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
