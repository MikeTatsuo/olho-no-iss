import { TestBed } from '@angular/core/testing';

import { IssPeopleService } from './iss-people.service';

describe('IssPeopleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IssPeopleService = TestBed.get(IssPeopleService);
    expect(service).toBeTruthy();
  });
});
