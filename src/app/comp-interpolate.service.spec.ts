import { TestBed } from '@angular/core/testing';

import { CompInterpolateService } from './comp-interpolate.service';

describe('CompInterpolateService', () => {
  let service: CompInterpolateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompInterpolateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
