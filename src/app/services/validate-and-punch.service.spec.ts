import { TestBed } from '@angular/core/testing';

import { ValidateAndPunchService } from './validate-and-punch.service';

describe('ValidateAndPunchService', () => {
  let service: ValidateAndPunchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidateAndPunchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
