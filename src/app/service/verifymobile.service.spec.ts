import { TestBed, inject } from '@angular/core/testing';

import { VerifymobileService } from './verifymobile.service';

describe('VerifymobileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VerifymobileService]
    });
  });

  it('should be created', inject([VerifymobileService], (service: VerifymobileService) => {
    expect(service).toBeTruthy();
  }));
});
