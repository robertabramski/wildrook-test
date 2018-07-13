import { TestBed, inject } from '@angular/core/testing';

import { ScrService } from './scr.service';

describe('ScrService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScrService]
    });
  });

  it('should be created', inject([ScrService], (service: ScrService) => {
    expect(service).toBeTruthy();
  }));
});
