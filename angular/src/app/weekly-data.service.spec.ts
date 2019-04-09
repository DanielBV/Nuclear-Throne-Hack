import { TestBed } from '@angular/core/testing';

import { GameDataService } from './weekly-data.service';

describe('WeeklyDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameDataService = TestBed.get(GameDataService);
    expect(service).toBeTruthy();
  });
});
