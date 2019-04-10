import { TestBed } from '@angular/core/testing';

import { GameEncryptionService } from './game-encryption.service';

describe('GameEncryptionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameEncryptionService = TestBed.get(GameEncryptionService);
    expect(service).toBeTruthy();
  });
});
