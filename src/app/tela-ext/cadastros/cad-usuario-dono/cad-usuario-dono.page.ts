import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Contato, Endereco } from './../../../tipo-users';
import { Usuario } from './../../../usuario';
import { EmailSendService } from './../../../email-send.service';
import { geradorCodigo } from './../../../utils/geradorCodigo';
import { Component, ViewChild } from '@angular/core';
import { IonButton, IonInput, ModalController } from '@ionic/angular';
import { CadUserService } from './../../../cad-user.service';
import { mask, unMask } from 'remask';
import { CadInformacoesService } from './../../../cad-informacoes.service';
import { Dono } from './../../../tipo-users';
import { ModalConfirmacaoComponent } from '../modal-confirmacao/modal-confirmacao.component';


@Component({
  selector: 'app-cad-usuario-dono',
  templateUrl: './cad-usuario-dono.page.html',
  styleUrls: ['./cad-usuario-dono.page.scss'],
})
export class CadUsuarioDonoPage {

  @ViewChild('btnConfirmaEmail') btnConfirmaEmail: IonButton;
  usuario: Usuario = {
    id: 0,
    flgTipoUser: 1,
    email: '',
    senha: '',
    cpf: '',
  }
  cpfTest = {
    mensagem: '',
    cor: ''
  }
  emailTest = {
    mensagem: '',
    cor: ''
  }
  senhaTest = {
    mensagem: '',
    cor: ''
  }
  confirmSenhaTest = {
    mensagem: '',
    cor: ''
  }
  telefoneTest = {
    mensagem: '',
    cor: ''
  }
  rgTest = {
    mensagem: '',
    cor: ''
  }
  inputs = {
    nome: {emBranco: true, editado: false},
    dtNascimento: {emBranco: true, editado: false, idadeOK: false},
    rg: {emBranco: true, editado: false, emUso: false},
    telefone: {emBranco: true, editado: false, emUso: false},
    cep: {emBranco: true, editado: false},
    rua: {emBranco: true, editado: false},
    numero: {emBranco: true, editado: false},
    bairro: {emBranco: true, editado: false},
    referencia: {emBranco: true, editado: false},
    cidade: {emBranco: true, editado: false},
    uf: {emBranco: true, editado: false}
  }
  aceitouTermos = false;
  ocultar = {
    cadUsuario: false,
    cadInfosPessoais: true
  }
  codigoConfirmacao = '';
  idUser = 0;

  constructor(private cadService: CadUserService, private modal: ModalController,
    private emailSendService: EmailSendService, private cadInfosService: CadInformacoesService,
    private http: HttpClient, private router: Router) { }

  isBlank(valor: string, inputName: string) {
    this.inputs[inputName].emBranco = (!valor.trim()) ? true : false;
    this.inputs[inputName].editado = true;

    this.ativarBotaoCadInfos();
  }

  calcularIdade(dtNascimento: string) {
    if(dtNascimento.length != 0) {
      var dtNascimentoSplit = dtNascimento.split('-');
      var anoAtual = (new Date()).getFullYear();

      if(parseInt(dtNascimentoSplit[0]) < anoAtual - 120 || parseInt(dtNascimentoSplit[0]) > anoAtual) {
        this.inputs.dtNascimento.idadeOK = false;
        this.ativarBotaoCadInfos();
      } else {
        this.inputs.dtNascimento.idadeOK = true;
        this.ativarBotaoCadInfos();
      }
    }
  }

  removeMensagem(inputName: string) {
    this.inputs[inputName].emBranco = false;

    this.ativarBotaoCadInfos();
  }

  confirmaAndMascaraCpf(cpfInput: HTMLInputElement) {
    var cpfAntigo = cpfInput.value;
    var cpfSemMascara = unMask(cpfAntigo);
    var novoCPF = mask(cpfSemMascara, ['999.999.999-99']);

    this.cpfTest = this.cadService.verificarCPF(novoCPF);
    this.cadService.btnConfirmaEmailAtivarDesativar(this.btnConfirmaEmail);
    cpfInput.value = novoCPF;
  }

  confirmaAndMascaraTelefone(telefoneInput: HTMLInputElement) {
    var telAntigo = telefoneInput.value;
    var telSemMask = unMask(telAntigo);
    var novoTel = '' + mask(telSemMask, ['(99) 9999-9999', '(99) 9 9999-9999'])

    if (novoTel.length == 14 || novoTel.length == 16) {
      this.cadInfosService.confirmaTelefone(novoTel).then(retorno => {
        if (retorno) {
          this.inputs.telefone.emUso = true;
          this.telefoneTest.mensagem = 'Telefone em Uso';
          this.telefoneTest.cor = 'vermelho';
          this.ativarBotaoCadInfos();
        } else {
          this.inputs.telefone.emUso = false;
          this.telefoneTest.mensagem = '';
          this.ativarBotaoCadInfos();
        }
      })
    }
    telefoneInput.value = novoTel;
  }

  confirmaRG(rg: string) {
    var rgSemPontos = '' + unMask(rg);

    if(rgSemPontos.length > 5) {
      this.cadInfosService.confirmaRG(rgSemPontos).then(retorno => {
        if (retorno) {
          this.inputs.rg.emUso = true;
          this.rgTest.mensagem = 'RG em Uso';
          this.rgTest.cor = 'vermelho';
          this.ativarBotaoCadInfos();
        } else {
          this.inputs.rg.emUso = false;
          this.rgTest.mensagem = 'RG OK';
          this.rgTest.cor = 'verde';
          this.ativarBotaoCadInfos();
        }
      })
    }
  }

  confirmaCEP(cep: HTMLInputElement, ruaInp: HTMLInputElement, bairroInp: HTMLInputElement,
    cidadeInp: HTMLInputElement, ufInp: HTMLInputElement) {
    var cepAntigo = cep.value;
    var cepSemMask = unMask(cepAntigo);
    var novoCEP = '' + mask(cepSemMask, ['99999-999']);

    if (novoCEP.length == 9) {
      this.cadInfosService.getEndereco(novoCEP).then(retorno => {
        ruaInp.value = retorno.logradouro;
        this.inputs.rua.editado = true;
        this.inputs.rua.emBranco = false;
        bairroInp.value = retorno.bairro;
        this.inputs.bairro.editado = true;
        this.inputs.bairro.emBranco = false;
        cidadeInp.value = retorno.localidade;
        this.inputs.cidade.editado = true;
        this.inputs.cidade.emBranco = false;
        ufInp.value = retorno.uf;
        this.inputs.uf.editado = true;
        this.inputs.uf.emBranco = false;
      })
    }
    cep.value = novoCEP;

    this.ativarBotaoCadInfos();
  }

  confirmaEmail(email: IonInput) {
    var rep = / /gi;
    var repEmail = (email.value + '').replace(rep, '');

    email.value = repEmail;
    this.emailTest = this.cadService.verificarEmail(email.value);
    this.cadService.btnConfirmaEmailAtivarDesativar(this.btnConfirmaEmail);
  }

  verificaSenha(senha: string) {
    this.senhaTest = this.cadService.verificarSenha(senha);
    this.cadService.btnConfirmaEmailAtivarDesativar(this.btnConfirmaEmail);
  }

  confirmarSenha(senha: string, confirmaSenha: string) {
    this.confirmSenhaTest = this.cadService.confirmarSenha(senha, confirmaSenha);
    this.cadService.btnConfirmaEmailAtivarDesativar(this.btnConfirmaEmail);
  }

  @ViewChild('msgBotaoEnvio') msgBotaoEnvio: HTMLLabelElement
  async enviarEmail(email: string, senha: string, cpf: string) {
    this.usuario.email = email;
    this.usuario.senha = senha;
    this.usuario.cpf = cpf;
    const modal = await this.modal.create({
      component: ModalConfirmacaoComponent
    });
    this.btnConfirmaEmail.disabled = true;
    if (!this.codigoConfirmacao.trim()) {
      this.codigoConfirmacao = geradorCodigo.gerarCodigo();
      this.emailSendService.enviarEmail(email, this.codigoConfirmacao).then(retorno => {
        if (retorno == 'OK') {
          modal.present();
          this.emailSendService.codigo = this.codigoConfirmacao;
        } else if (retorno == 'Error') {
          this.codigoConfirmacao = '';
          this.msgBotaoEnvio.innerHTML = '<small style="color: red;">Um erro ao enviar o e-mail ocorreu... Tente novamente!</small>';
          this.btnConfirmaEmail.disabled = false;
        }
      });
    } else {
      modal.present();
    }

    modal.onDidDismiss().then(data => {
      if (data.data !== undefined) {
        if (data.data.proximaEtapa) {
          this.cadService.cadastrarUsuario(this.usuario).then(idUser => {
            if (idUser != -1) {
              console.log('Usuario cadastrado ID: ' + idUser)
              this.cadService.cadTipoUsuario(idUser, this.usuario.flgTipoUser).then(idTipo => {
                console.log('Tipo cadastrado ID: ' + idTipo)
                if(idTipo != -1) {
                  this.usuario.id = idUser;
                  this.ocultar.cadUsuario = true;
                  this.ocultar.cadInfosPessoais = false;
                }
              })
            } else {
              modal.present();
            }
          });
        }
      } else {
        this.btnConfirmaEmail.disabled = false;
      }
    })
  }

  inputsOK(): Boolean {
    for(var prop in this.inputs) {
      if(this.inputs[prop].emBranco || !this.inputs[prop].editado) {
        return false;
      }
    }
    return true;
  }

  aceitaTermos(termos: HTMLIonCheckboxElement) {
    this.aceitouTermos = (!termos.checked);

    this.ativarBotaoCadInfos();
  }

  @ViewChild('confirmaInfosBtn') confirmaInfosBtn: HTMLButtonElement;
  ativarBotaoCadInfos() {
    if(this.inputsOK() && this.aceitouTermos && !this.inputs.rg.emUso && !this.inputs.telefone.emUso && this.inputs.dtNascimento.idadeOK) {
      this.confirmaInfosBtn.disabled = false;
    } else {
      this.confirmaInfosBtn.disabled = true;
    }
  }

  @ViewChild('nomeCompleto') nome: HTMLInputElement;
  @ViewChild('dtNascimento') dtNascimento: HTMLInputElement;
  @ViewChild('rg') rg: HTMLInputElement;
  getInfosPessoais(): Dono {
    return {
      idUser: this.usuario.id,
      nome: this.nome.value,
      dtNascimento: this.dtNascimento.value,
      rg: this.rg.value
    }
  }

  @ViewChild('telefone') telefone: HTMLInputElement;
  getContato(idRetorno: number): Contato {
    return {
      idDono: idRetorno,
      telefone: this.telefone.value
    }
  }

  @ViewChild('cep') cep: HTMLInputElement;
  @ViewChild('rua') rua: HTMLInputElement;
  @ViewChild('numero') numero: HTMLInputElement;
  @ViewChild('referencia') referencia: HTMLInputElement;
  @ViewChild('bairro') bairro: HTMLInputElement;
  @ViewChild('cidade') cidade: HTMLInputElement;
  @ViewChild('uf') uf: HTMLInputElement;
  @ViewChild('complemento') complemento: HTMLInputElement;
  getEndereco(idRetorno: number): Endereco {
    var endereco: Endereco = {
      idDono: idRetorno,
      cep: this.cep.value,
      rua: this.rua.value,
      numero: parseInt(this.numero.value),
      referencia: this.referencia.value,
      bairro: this.bairro.value,
      cidade: this.cidade.value,
      uf: this.uf.value
    }

    if(this.complemento.value.trim()) {
      endereco.complemento = this.complemento.value;
    }
    return endereco;
  }

  cadastrarDono() {
    this.cadInfosService.cadDono(this.getInfosPessoais()).then(idDono => {
      if(idDono != -1) {
        this.cadInfosService.cadContato(this.getContato(idDono)).then(idContato => {
          if(idContato != -1) {
            this.cadInfosService.cadEndereco(this.getEndereco(idDono)).then(idEndereco => {
              if(idEndereco != -1) {
                var objRetorno: {
                  token: string
                }
                new Promise<typeof objRetorno>((resolve) => {
                  this.http.get<typeof objRetorno>(`http://201.2.233.226:8080/usuario/logar?email=${this.usuario.email}&senha=${this.usuario.senha}`).subscribe(
                    retorno => resolve(retorno)
                  )
                }).then(retorno => {
                  if(retorno.token != '-1') {
                    localStorage.setItem('token', retorno.token);
                    this.router.navigateByUrl('/home-done')
                  }
                })
              }
            })
          }
        })
      }
    })
  }

}
