import { TestBed } from '@angular/core/testing';

import { FirestoneTestService } from './firestone-test.service';

describe('FirestoneTestService', () => {
  let service: FirestoneTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirestoneTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
