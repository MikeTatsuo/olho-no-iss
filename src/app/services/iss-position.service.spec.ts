import { TestBed } from '@angular/core/testing';

import { IssPositionService } from './iss-position.service';

describe('IssPositionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IssPositionService = TestBed.get(IssPositionService);
    expect(service).toBeTruthy();
  });
});
