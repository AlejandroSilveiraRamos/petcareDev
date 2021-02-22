import { mask, unMask } from 'remask';
import { CadInformacoesService } from './../../cad-informacoes.service';

import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viagem',
  templateUrl: './viagem.page.html',
  styleUrls: ['./viagem.page.scss'],
})
export class ViagemPage {

  constructor(private router: Router, private endereco: CadInformacoesService) { }

  inputs = {
    nomePet: {
      blank: true,
      editado: false
    },
    especie: {
      blank: true,
      editado: false
    },
    tamanho: {
      blank: true,
      editado: false
    },
    detalhes: {
      blank: true,
      editado: false
    }
  }
  enderecos = {
    enderecoPartida: {
      rua: {
        blank: true,
        editado: false
      },
      numero: {
        blank: true,
        editado: false
      },
      bairro: {
        blank: true,
        editado: false
      },
      cidade: {
        blank: true,
        editado: false
      },
      uf: {
        blank: true,
        editado: false
      },
      referencia: {
        blank: true,
        editado: false
      }
    },
    enderecoDestino: {
      rua: {
        blank: true,
        editado: false
      },
      numero: {
        blank: true,
        editado: false
      },
      bairro: {
        blank: true,
        editado: false
      },
      cidade: {
        blank: true,
        editado: false
      },
      uf: {
        blank: true,
        editado: false
      },
      referencia: {
        blank: true,
        editado: false
      }
    }
  }

  isBlank(valor: string, inputName: string) {
    this.inputs[inputName].blank = (!valor.trim()) ? true : false;
    this.inputs[inputName].editado = true;

    this.ativarBtnContinua();
  }

  isBlankEndereco(valor: string, tipoEndereco: string, inputName: string) {
    this.enderecos[tipoEndereco][inputName].blank = (!valor.trim()) ? true : false;
    this.enderecos[tipoEndereco][inputName].editado = true;

    this.ativarBtnContinua();
  }

  confirmaCEP(cep: HTMLInputElement, rua: HTMLInputElement, bairro: HTMLInputElement,
    cidade: HTMLInputElement, uf: HTMLInputElement, tipoEndereco: string) {
    var cepAntigo = cep.value;
    var cepSemMask = unMask(cepAntigo);
    var novoCEP = '' + mask(cepSemMask, ['99999-999']);

    if (novoCEP.length == 9) {
      this.endereco.getEndereco(novoCEP).then(retorno => {
        rua.value = retorno.logradouro;
        this.enderecos[tipoEndereco].rua.editado = true;
        this.enderecos[tipoEndereco].rua.blank = false;
        bairro.value = retorno.bairro;
        this.enderecos[tipoEndereco].bairro.editado = true;
        this.enderecos[tipoEndereco].bairro.blank = false;
        cidade.value = retorno.localidade;
        this.enderecos[tipoEndereco].cidade.editado = true;
        this.enderecos[tipoEndereco].cidade.blank = false;
        uf.value = retorno.uf;
        this.enderecos[tipoEndereco].uf.editado = true;
        this.enderecos[tipoEndereco].uf.blank = false;
      })
    }
    cep.value = novoCEP;
  }

  inputsOK(): boolean {
    for (var prop in this.inputs) {
      if (this.inputs[prop].blank || !this.inputs[prop].editado) {
        return false;
      }
    }
    for(prop in this.enderecos.enderecoPartida) {
      if(this.enderecos.enderecoPartida[prop].blank || !this.enderecos.enderecoPartida[prop].editado ||
        this.enderecos.enderecoDestino[prop].blank || !this.enderecos.enderecoDestino[prop].editado) {
        return false;
      }
    }

    return true;
  }

  @ViewChild('btnContinuar') btnContinuar: HTMLButtonElement
  ativarBtnContinua() {
    if (this.inputsOK()) {
      this.btnContinuar.disabled = false;
    } else {
      this.btnContinuar.disabled = true;
    }
  }

  goTo(page: string) {
    this.router.navigate([page])
  }
}

