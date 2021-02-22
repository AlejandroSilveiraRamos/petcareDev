import { TestBed } from '@angular/core/testing';

import { CadUserService } from './cad-user.service';

describe('CadUserService', () => {
  let service: CadUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
