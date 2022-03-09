import { TestBed } from '@angular/core/testing';

import { TechnologienService } from './technologien.service';

describe('TechnologienService', () => {
  let service: TechnologienService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechnologienService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
