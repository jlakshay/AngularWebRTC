import { TestBed, inject } from '@angular/core/testing';

import { AdatperService } from './adatper.service';

describe('AdatperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdatperService]
    });
  });

  it('should be created', inject([AdatperService], (service: AdatperService) => {
    expect(service).toBeTruthy();
  }));
});
