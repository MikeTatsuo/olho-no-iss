import { TestBed } from '@angular/core/testing';

import { OpenNotifyService } from './open-notify.service';

describe('OpenNotifyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpenNotifyService = TestBed.get(OpenNotifyService);
    expect(service).toBeTruthy();
  });
});
