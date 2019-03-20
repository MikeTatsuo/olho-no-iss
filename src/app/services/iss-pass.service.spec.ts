import { TestBed } from '@angular/core/testing';

import { IssPassService } from './iss-pass.service';

describe('IssPassService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IssPassService = TestBed.get(IssPassService);
    expect(service).toBeTruthy();
  });
});
