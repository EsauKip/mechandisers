import { TestBed } from '@angular/core/testing';

import { MechandiserService } from './mechandiser.service';

describe('MechandiserService', () => {
  let service: MechandiserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MechandiserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
