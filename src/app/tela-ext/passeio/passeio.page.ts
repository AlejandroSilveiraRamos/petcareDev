import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-passeio',
  templateUrl: './passeio.page.html',
  styleUrls: ['./passeio.page.scss'],
})
export class PasseioPage implements OnInit {

  constructor(private router: Router) { }

  inputs = {
    nomePet: {
      blank: true,
      editado: false
    },
    especie: {
      blank: true,
      editado: false
    },
    raca: {
      blank: true,
      editado: false
    },
    tamanho: {
      blank: true,
      editado: false
    },
    tempo: {
      blank: true,
      editado: false
    },
    detalhes: {
      blank: true,
      editado: false
    }
  }

  ngOnInit() {
  }

  isBlank(valor: string, inputName: string) {
    this.inputs[inputName].blank = (!valor.trim()) ? true : false;
    this.inputs[inputName].editado = true;

    this.ativarBtnContinua();
  }

  inputsOK(): boolean {
    for (var prop in this.inputs) {
      if (this.inputs[prop].blank || !this.inputs[prop].editado) {
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

  goTo() {
    this.router.navigate(['passeio-services'])
  }
}
