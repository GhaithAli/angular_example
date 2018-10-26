import { TestBed } from '@angular/core/testing';

import { SosWorkersServiceService } from './sos-workers-service.service';

describe('SosWorkersServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SosWorkersServiceService = TestBed.get(SosWorkersServiceService);
    expect(service).toBeTruthy();
  });
});
