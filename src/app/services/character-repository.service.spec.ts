import { TestBed } from '@angular/core/testing';

import { CharacterRepositoryService } from './character-repository.service';

describe('CharacterRepositoryService', () => {
  let service: CharacterRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
