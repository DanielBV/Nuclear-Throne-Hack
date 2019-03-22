import { TestBed } from '@angular/core/testing';

import { MutationServiceService } from './mutation-service.service';

describe('MutationServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MutationServiceService = TestBed.get(MutationServiceService);
    expect(service).toBeTruthy();
  });
});
