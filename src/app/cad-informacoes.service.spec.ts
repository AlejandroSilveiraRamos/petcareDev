import { TestBed } from '@angular/core/testing';

import { CadInformacoesService } from './cad-informacoes.service';

describe('CadInformacoesService', () => {
  let service: CadInformacoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadInformacoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
