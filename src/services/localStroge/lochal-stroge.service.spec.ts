import { TestBed } from '@angular/core/testing';

import { LochalStrogeService } from './lochal-stroge.service';

describe('LochalStrogeService', () => {
  let service: LochalStrogeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LochalStrogeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
