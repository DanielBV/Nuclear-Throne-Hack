import { TestBed } from '@angular/core/testing';

import { WeeklyDataService } from './weekly-data.service';

describe('WeeklyDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeeklyDataService = TestBed.get(WeeklyDataService);
    expect(service).toBeTruthy();
  });
});
