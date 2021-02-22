import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { geradorCodigo } from '../../../utils/geradorCodigo';
import { ModalConfirmacaoComponent } from '../modal-confirmacao/modal-confirmacao.component';
import { CadInformacoesService } from '../../../cad-informacoes.service';
import { IonButton, IonInput, ModalController } from '@ionic/angular';
import { EmailSendService } from '../../../email-send.service';
import { CadUserService } from '../../../cad-user.service';
import { mask, unMask } from 'remask';
import { Usuario } from '../../../usuario';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cad-usuario-cuidador',
  templateUrl: './cad-usuario-cuidador.page.html',
  styleUrls: ['./cad-usuario-cuidador.page.scss'],
})
export class CadUsuarioCuidadorPage {

  @ViewChild('btnConfirmaEmail') btnConfirmaEmail: IonButton;
  usuario: Usuario = {
    id: 0,
    flgTipoUser: 3,
    email: '',
    senha: '',
    cpf: '',
    cnpj: ''
  }
  cpfCnpjTest = {
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
    fisico: {
      nome: { emBranco: true, editado: false },
      dtNascimento: { emBranco: true, editado: false, idadeOK: true },
      rg: { emBranco: true, editado: false, emUso: false },
      telefone: { emBranco: true, editado: false, emUso: false },
      cep: { emBranco: true, editado: false },
      rua: { emBranco: true, editado: false },
      numero: { emBranco: true, editado: false },
      bairro: { emBranco: true, editado: false },
      referencia: { emBranco: true, editado: false },
      cidade: { emBranco: true, editado: false },
      uf: { emBranco: true, editado: false }
    },
    juridico: {
      razaoSocial: { emBranco: true, editado: false },
      responsavel: { emBranco: true, editado: false },
      telefone: { emBranco: true, editado: false, emUso: false },
      cep: { emBranco: true, editado: false },
      rua: { emBranco: true, editado: false },
      numero: { emBranco: true, editado: false },
      bairro: { emBranco: true, editado: false },
      referencia: { emBranco: true, editado: false },
      cidade: { emBranco: true, editado: false },
      uf: { emBranco: true, editado: false }
    }
  }
  aceitouTermos = false;
  ocultar = {
    cadUsuario: false,
    cadInfosPessoaisFisico: true,
    cadInfosPessoaisJuridico: true
  }
  codigoConfirmacao = '';

  constructor(private cadService: CadUserService, private modal: ModalController,
    private emailSendService: EmailSendService, private cadInfosService: CadInformacoesService,
    private router: Router, private http: HttpClient) { }

  trocarTipo(tipo: string, labelInput: HTMLDivElement, inp: HTMLInputElement) {
    if (tipo == 'fisico') {
      labelInput.innerHTML = '<ion-label position="floating">CPF</ion-label>';
      inp.checked = true;
      this.cadService.setCpfCnpjOK(false);
      this.cadService.btnConfirmaEmailAtivarDesativar(this.btnConfirmaEmail)
      this.usuario.flgTipoUser = 2;
    } else {
      labelInput.innerHTML = '<ion-label position="floating">CNPJ</ion-label>';
      inp.checked = true;
      this.cadService.setCpfCnpjOK(false);
      this.cadService.btnConfirmaEmailAtivarDesativar(this.btnConfirmaEmail)
      this.usuario.flgTipoUser = 3;
    }
  }

  removeMensagem(inputName: string) {
    var tipoCuidador: string = (this.usuario.flgTipoUser == 2) ? 'fisico' : 'juridico';
    this.inputs[tipoCuidador][inputName].emBranco = false;

    this.ativarBotaoCadInfos();
  }

  confirmaAndMascCpfCnpj(cpfCnpjInput: HTMLInputElement) {
    var cpfCnpjAntigo = cpfCnpjInput.value;
    var cpfCnpjSemMascara = unMask(cpfCnpjAntigo);
    var novoCpfCnpj;
    if (this.usuario.flgTipoUser == 2) {
      novoCpfCnpj = mask(cpfCnpjSemMascara, ['999.999.999-99']);
      this.cpfCnpjTest = this.cadService.verificarCPF(novoCpfCnpj);
    } else {
      novoCpfCnpj = mask(cpfCnpjSemMascara, ['99.999.999/9999-99']);
      this.cpfCnpjTest = this.cadService.verificarCNPJ(novoCpfCnpj)
    }
    this.cadService.btnConfirmaEmailAtivarDesativar(this.btnConfirmaEmail)
    cpfCnpjInput.value = novoCpfCnpj;
  }

  confirmaEmail(email: IonInput) {
    var rep = / /gi;
    var repEmail = (email.value + '').replace(rep, '');

    email.value = repEmail;
    this.emailTest = this.cadService.verificarEmail(email.value);
    this.cadService.btnConfirmaEmailAtivarDesativar(this.btnConfirmaEmail)
  }

  verificaSenha(senha: string) {
    this.senhaTest = this.cadService.verificarSenha(senha);
    this.cadService.btnConfirmaEmailAtivarDesativar(this.btnConfirmaEmail)
  }

  confirmarSenha(senha: string, confirmaSenha: string) {
    this.confirmSenhaTest = this.cadService.confirmarSenha(senha, confirmaSenha);
    this.cadService.btnConfirmaEmailAtivarDesativar(this.btnConfirmaEmail)
  }

  @ViewChild('msgBotaoEnvio') msgBotaoEnvio: HTMLLabelElement;

  async enviarEmail(email: string, senha: string, cpfCnpj: string) {
    this.usuario.email = email;
    this.usuario.senha = senha;
    if(cpfCnpj.length == 14) {
      this.usuario.cpf = cpfCnpj;
      this.usuario.cnpj = null;
    } else {
      this.usuario.cpf = null;
      this.usuario.cnpj = cpfCnpj;
    }
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
              this.cadService.cadTipoUsuario(idUser, this.usuario.flgTipoUser).then(idTipo => {
                if (idTipo != -1) {
                  this.usuario.id = idUser;
                  this.ocultar.cadUsuario = true;
                  if (this.usuario.flgTipoUser == 2) {
                    this.ocultar.cadInfosPessoaisFisico = false;
                  } else if (this.usuario.flgTipoUser == 3) {
                    this.ocultar.cadInfosPessoaisJuridico = false;
                  }
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
    var tipoCuidador: string = (this.usuario.flgTipoUser == 2) ? 'fisico' : 'juridico';
    for (var prop in this.inputs[tipoCuidador]) {
      if (this.inputs[tipoCuidador][prop].emBranco || !this.inputs[tipoCuidador][prop].editado) {
        return false;
      }
    }
    return true;
  }

  informacaoEmUso(): Boolean {
    var tipoCuidador: string = (this.usuario.flgTipoUser == 2) ? 'fisico' : 'juridico';
    if (this.usuario.flgTipoUser == 2) {
      return this.inputs[tipoCuidador].rg.emUso || this.inputs[tipoCuidador].telefone.emUso;
    } else {
      return this.inputs[tipoCuidador].telefone.emUso;
    }
  }

  @ViewChild('confirmaInfosBtnJuridico') confirmaInfosBtnJuridico: HTMLButtonElement;
  @ViewChild('confirmaInfosBtnFisico') confirmaInfosBtnFisico: HTMLButtonElement;
  ativarBotaoCadInfos() {
    if (this.inputsOK() && this.aceitouTermos && !this.informacaoEmUso()
      && this.inputs.fisico.dtNascimento.idadeOK) {
      this.confirmaInfosBtnFisico.disabled = false;
      this.confirmaInfosBtnJuridico.disabled = false;
    } else {
      this.confirmaInfosBtnFisico.disabled = true;
      this.confirmaInfosBtnJuridico.disabled = true;
    }
  }

  isBlank(valor: string, inputName: string) {
    var tipoCuidador: string = (this.usuario.flgTipoUser == 2) ? 'fisico' : 'juridico';
    this.inputs[tipoCuidador][inputName].emBranco = (!valor.trim()) ? true : false;
    this.inputs[tipoCuidador][inputName].editado = true;

    this.ativarBotaoCadInfos();
  }

  calcularIdade(dtNascimento: string) {
    if (dtNascimento.length != 0) {
      var dtNascimentoSplit = dtNascimento.split('-');
      var anoAtual = (new Date()).getFullYear();

      if (parseInt(dtNascimentoSplit[0]) < anoAtual - 120 || parseInt(dtNascimentoSplit[0]) > anoAtual) {
        this.inputs.fisico.dtNascimento.idadeOK = false;
        this.ativarBotaoCadInfos();
      } else {
        this.inputs.fisico.dtNascimento.idadeOK = true;
        this.ativarBotaoCadInfos();
      }
    }
  }

  confirmaRG(rg: string) {
    var rgSemPontos = '' + unMask(rg);

    if (rgSemPontos.length > 5) {
      this.cadInfosService.confirmaRG(rgSemPontos).then(retorno => {
        if (retorno) {
          this.inputs.fisico.rg.emUso = true;
          this.rgTest.mensagem = 'RG em Uso';
          this.rgTest.cor = 'vermelho';
          this.ativarBotaoCadInfos();
        } else {
          this.inputs.fisico.rg.emUso = false;
          this.rgTest.mensagem = 'RG OK';
          this.rgTest.cor = 'verde';
          this.ativarBotaoCadInfos();
        }
      })
    }
  }

  confirmaAndMascaraTelefone(telefoneInput: HTMLInputElement) {
    var telAntigo = telefoneInput.value;
    var telSemMask = unMask(telAntigo);
    var novoTel = '' + mask(telSemMask, ['(99) 9999-9999', '(99) 9 9999-9999'])
    var tipoCuidador: string = (this.usuario.flgTipoUser == 2) ? 'fisico' : 'juridico';

    if (novoTel.length == 14 || novoTel.length == 16) {
      this.cadInfosService.confirmaTelefone(novoTel).then(retorno => {
        if (retorno) {
          this.inputs[tipoCuidador].telefone.emUso = true;
          this.telefoneTest.mensagem = 'Telefone em Uso';
          this.telefoneTest.cor = 'vermelho';
          this.ativarBotaoCadInfos();
        } else {
          this.inputs[tipoCuidador].telefone.emUso = false;
          this.telefoneTest.mensagem = '';
          this.ativarBotaoCadInfos();
        }
      })
    }
    telefoneInput.value = novoTel;
  }

  confirmaCEP(cep: HTMLInputElement, ruaInp: HTMLInputElement, bairroInp: HTMLInputElement,
    cidadeInp: HTMLInputElement, ufInp: HTMLInputElement) {
    var tipoCuidador: string = (this.usuario.flgTipoUser == 2) ? 'fisico' : 'juridico';
    var cepAntigo = cep.value;
    var cepSemMask = unMask(cepAntigo);
    var novoCEP = '' + mask(cepSemMask, ['99999-999']);

    if (novoCEP.length == 9) {
      this.cadInfosService.getEndereco(novoCEP).then(retorno => {
        ruaInp.value = retorno.logradouro;
        this.inputs[tipoCuidador].rua.editado = true;
        this.inputs[tipoCuidador].rua.emBranco = false;
        bairroInp.value = retorno.bairro;
        this.inputs[tipoCuidador].bairro.editado = true;
        this.inputs[tipoCuidador].bairro.emBranco = false;
        cidadeInp.value = retorno.localidade;
        this.inputs[tipoCuidador].cidade.editado = true;
        this.inputs[tipoCuidador].cidade.emBranco = false;
        ufInp.value = retorno.uf;
        this.inputs[tipoCuidador].uf.editado = true;
        this.inputs[tipoCuidador].uf.emBranco = false;
      })
    }
    cep.value = novoCEP;

    this.ativarBotaoCadInfos();
  }

  aceitaTermos(termos: HTMLIonCheckboxElement) {
    this.aceitouTermos = (!termos.checked);

    this.ativarBotaoCadInfos();
  }

  @ViewChild('nomeCompleto') nomeCompleto: HTMLInputElement;
  @ViewChild('dtNascimento') dtNascimento: HTMLInputElement;
  @ViewChild('rg') rg: HTMLInputElement;

  getInfosPessoais() {
    return {
      idUser: this.usuario.id,
      nome: this.nomeCompleto.value,
      dtNascimento: this.dtNascimento.value,
      rg: this.rg.value
    }
  }

  @ViewChild('razaoSocial') razaoSocial: HTMLInputElement;
  @ViewChild('responsavel') responsavel: HTMLInputElement;

  getInfosJuridicas() {
    return {
      idUser: this.usuario.id,
      razaoSocial: this.razaoSocial.value,
      responsavel: this.responsavel.value
    }
  }

  @ViewChild('telefoneFisico') telefoneFisico: HTMLInputElement;

  getContatoFisico(idRetorno: number) {
    return {
      idCaregiver: idRetorno,
      telefone: this.telefoneFisico.value
    }
  }

  @ViewChild('telefoneJuridico') telefoneJuridico: HTMLInputElement;

  getContatoJuridico(idRetorno: number) {
    return {
      idEmpresa: idRetorno,
      telefone: this.telefoneJuridico.value
    }
  }

  @ViewChild('inpCepFisico') cepFisico: HTMLInputElement;
  @ViewChild('inpRuaFisico') ruaFisico: HTMLInputElement;
  @ViewChild('inpNumeroFisico') numeroFisico: HTMLInputElement;
  @ViewChild('inpReferenciaFisico') referenciaFisico: HTMLInputElement;
  @ViewChild('inpBairroFisico') bairroFisico: HTMLInputElement;
  @ViewChild('inpCidadeFisico') cidadeFisico: HTMLInputElement;
  @ViewChild('inpUfFisico') ufFisico: HTMLInputElement;
  @ViewChild('inpComplementoFisico') complementoFisico: HTMLInputElement;

  getEnderecoFisico(idRetorno: number) {
    var endereco = {
      idCaregiver: idRetorno,
      cep: this.cepFisico.value,
      rua: this.ruaFisico.value,
      numero: parseInt(this.numeroFisico.value),
      referencia: this.referenciaFisico.value,
      bairro: this.bairroFisico.value,
      cidade: this.cidadeFisico.value,
      uf: this.ufFisico.value,
      complemento: null
    }

    if (this.complementoFisico.value.trim()) {
      endereco.complemento = this.complementoFisico.value;
    }
    return endereco;
  }

  @ViewChild('inpCepJuridico') cepJuridico: HTMLInputElement;
  @ViewChild('inpRuaJuridico') ruaJuridico: HTMLInputElement;
  @ViewChild('inpNumeroJuridico') numeroJuridico: HTMLInputElement;
  @ViewChild('inpReferenciaJuridico') referenciaJuridico: HTMLInputElement;
  @ViewChild('inpBairroJuridico') bairroJuridico: HTMLInputElement;
  @ViewChild('inpCidadeJuridico') cidadeJuridico: HTMLInputElement;
  @ViewChild('inpUfJuridico') ufJuridico: HTMLInputElement;
  @ViewChild('inpComplementoJuridico') complementoJuridico: HTMLInputElement;

  getEnderecoJuridico(idRetorno: number) {
    var endereco = {
      idEmpresa: idRetorno,
      cep: this.cepJuridico.value,
      rua: this.ruaJuridico.value,
      numero: parseInt(this.numeroJuridico.value),
      referencia: this.referenciaJuridico.value,
      bairro: this.bairroJuridico.value,
      cidade: this.cidadeJuridico.value,
      uf: this.ufJuridico.value,
      complemento: null
    }

    if (this.complementoJuridico.value.trim()) {
      endereco.complemento = this.complementoJuridico.value;
    }
    return endereco;
  }

  cadastrarCuidador() {
    var objCadCuidador = (this.usuario.flgTipoUser == 2) ? this.getInfosPessoais() : this.getInfosJuridicas();
    this.cadInfosService.cadCuidador(objCadCuidador, this.usuario.flgTipoUser).then(idCuidador => {
      if (idCuidador != -1) {
        var objContato = (this.usuario.flgTipoUser == 2) ? this.getContatoFisico(idCuidador) : this.getContatoJuridico(idCuidador);
        this.cadInfosService.cadContato(objContato).then(idContato => {
          if (idContato != -1) {
            var objEndereco = (this.usuario.flgTipoUser == 2) ? this.getEnderecoFisico(idCuidador) : this.getEnderecoJuridico(idCuidador);
            this.cadInfosService.cadEndereco(objEndereco).then(idEndereco => {
              if (idEndereco != -1) {
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
