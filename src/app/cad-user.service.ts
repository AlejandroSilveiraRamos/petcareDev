import { Usuario } from './usuario';
import { Injectable, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { cnpj, cpf } from 'cpf-cnpj-validator';
import { IonButton } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CadUserService {

  urlApi = 'http://201.2.233.226:8080/';

  cpfCnpjOK = false;
  emailOK = false;
  senhaOK = false;
  confirmSenhaOK = false;

  constructor(private http: HttpClient) { }

  cadTipoUsuario(idUser: number, flgTipo: number) {
    return new Promise<number>((resolve) => {
      return this.http.post<string>(this.urlApi + 'tipo-user/salvar-tipo', { idUser: idUser, flgTipo: flgTipo }).subscribe(
        retorno => resolve(parseInt(retorno))
      )
    })
  }

  verificarInformacao(tipoInfo: string, valorInfo: string): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      this.http.get<boolean>(this.urlApi + 'usuario/verificarInfo/' + tipoInfo + '?info=' + valorInfo).subscribe(
        retorno => {
          resolve(retorno);
        }
      )
    });
  }

  verificarCNPJ(cnpjString: string) {
    var retorno: {
      cor: string,
      mensagem: string
    }
    retorno = {
      cor: '',
      mensagem: ''
    }

    if(cnpjString.length == 18) {
      if(cnpj.isValid(cnpjString)) {
        this.verificarInformacao('cnpj', cnpjString).then(resp => {
          if (resp) {
            retorno.mensagem = 'CNPJ Em Uso!'
            retorno.cor = 'vermelho';
            this.cpfCnpjOK = false;
          } else {
            retorno.mensagem = 'CNPJ Válido!'
            retorno.cor = 'verde';
            this.cpfCnpjOK = true;
          }
        });
      } else {
        retorno.mensagem = 'CNPJ Inválido!'
        retorno.cor = 'verde';
        this.cpfCnpjOK = true;
      }
    } else {
      retorno.mensagem = 'CNPJ Inválido!'
      retorno.cor = 'verde';
      this.cpfCnpjOK = true;
    }
    return retorno;
  }

  verificarCPF(cpfString: string) {
    var retorno: {
      cor: string,
      mensagem: string
    }
    retorno = {
      cor: '',
      mensagem: ''
    }
    if (cpfString.length == 14) {
      if (cpf.isValid(cpfString)) {
        this.verificarInformacao('cpf', cpfString).then(
          resp => {
            if (resp) {
              retorno.mensagem = 'CPF Em Uso!'
              retorno.cor = 'vermelho';
              this.cpfCnpjOK = false;
            } else {
              retorno.mensagem = 'CPF Válido!'
              retorno.cor = 'verde';
              this.cpfCnpjOK = true;
            }
          }
        );
      } else {
        retorno.mensagem = 'CPF Inválido!'
        retorno.cor = 'vermelho';
        this.cpfCnpjOK = false;
      }
    } else {
      retorno.mensagem = ''
      retorno.cor = 'vermelho';
      this.cpfCnpjOK = false;
    }
    return retorno;
  }

  verificarEmail(email: string) {
    var retorno: {
      cor: string,
      mensagem: string
    }
    retorno = {
      cor: '',
      mensagem: ''
    }

    if (email.length !== 0 && email.trim() !== '' && email !== '') {
      email = email.trim();
      const user = email.substring(0, email.indexOf("@"));
      const dominioEmail = email.substring(email.indexOf("@") + 1, email.length)
      if ((user.length >= 1) &&
        (dominioEmail.length >= 3) &&
        (user.search("@") == -1) &&
        (dominioEmail.search("@") == -1) &&
        (user.search(" ") == -1) &&
        (dominioEmail.search(" ") == -1) &&
        (dominioEmail.search(".") != -1) &&
        (dominioEmail.indexOf(".") >= 1) &&
        (dominioEmail.lastIndexOf(".") < dominioEmail.length - 1)) {
        this.verificarInformacao('email', email).then(
          resp => {
            if (resp) {
              retorno.mensagem = 'E-Mail Em Uso!';
              retorno.cor = 'vermelho';
              this.emailOK = false;
            } else {
              retorno.mensagem = 'E-Mail Válido!';
              retorno.cor = 'verde';
              this.emailOK = true;
            }
          }, error => console.error(error)
        )
      } else {
        retorno.mensagem = 'E-Mail Inválido!';
        retorno.cor = 'vermelho';
        this.emailOK = false;
      }
    } else {
      retorno.mensagem = '';
      retorno.cor = 'vermelho';
      this.emailOK = false;
    }
    return retorno;
  }

  verificarSenha(senha: string) {
    var retorno: {
      mensagem: string,
      cor: string
    }
    retorno = {
      cor: '',
      mensagem: ''
    }
    if (senha.length !== 0 || senha.trim()) {
      if (!(senha.length < 8)) {
        if (senha != senha.toUpperCase() && senha != senha.toLowerCase()) {
          retorno.mensagem = 'Senha OK!';
          retorno.cor = 'verde';
          this.senhaOK = true;
        } else if (senha === senha.toUpperCase()) {
          retorno.mensagem = 'A senha precisa de pelo menos uma letra minúscula!';
          retorno.cor = 'vermelho';
          this.senhaOK = false;
        } else if (senha === senha.toLowerCase()) {
          retorno.mensagem = 'A senha precisa de pelo menos uma letra maíuscula!';
          retorno.cor = 'vermelho';
          this.senhaOK = false;
        }

        var encontrouNumeros = true;
        var i = 0;

        while (encontrouNumeros) {
          if (senha.search('' + i) != -1) {
            encontrouNumeros = true;
            break;
          } else if (i == 9) {
            encontrouNumeros = false;
            break;
          }
          i++;
        }

        if (!encontrouNumeros) {
          if (retorno.mensagem == 'Senha OK!') {
            retorno.mensagem = 'Número faltando!'
            retorno.cor = 'vermelho';
            this.senhaOK = false;
          } else {
            retorno.mensagem += 'Número faltando!'
            retorno.cor = 'vermelho';
            this.senhaOK = false;
          }
        } else {
          if (!(retorno.mensagem == 'Senha OK!')) {
            retorno.mensagem += ''
            retorno.cor = 'vermelho';
            this.senhaOK = false;
          }
        }
      } else {
        retorno.mensagem = 'A senha precisa ter no minímo 8 digitos!'
        retorno.cor = 'vermelho';
        this.senhaOK = false;
      }
    } else {
      retorno.mensagem = 'A senha não pode ficar em Branco!'
      retorno.cor = 'vermelho';
      this.senhaOK = false;
    }
    return retorno;
  }

  confirmarSenha(senha: string, senha2: string) {
    var retorno = {
      mensagem: '',
      cor: ''
    }
    if (this.senhaOK) {
      if (senha === senha2) {
        retorno.mensagem = '';
        this.confirmSenhaOK = true;
        retorno.cor = 'verde';
      } else {
        retorno.mensagem = 'Senhas não coincidem!';
        retorno.cor = 'vermelho';
        this.confirmSenhaOK = false;
      }
    } else {
      this.confirmSenhaOK = false;
    }
    return retorno;
  }

  setCpfCnpjOK(ok: boolean) {
    this.cpfCnpjOK = ok;
  }

  public btnConfirmaEmailAtivarDesativar(btnConfirmaEmail: IonButton) {
    if (this.emailOK && this.confirmSenhaOK && this.cpfCnpjOK) {
      btnConfirmaEmail.disabled = false;
    } else {
      btnConfirmaEmail.disabled = true;
    }
  }

  cadastrarUsuario(usuario: Usuario) {
    var cad = {
      email: usuario.email,
      senha: usuario.senha,
      flgTipoUser: usuario.flgTipoUser,
      cpf: '',
      cnpj: ''
    }

    if (usuario.flgTipoUser == 1 || usuario.flgTipoUser == 2) {
      cad.cnpj = null;
      cad.cpf = usuario.cpf;
    } else {
      cad.cpf = null;
      cad.cnpj = usuario.cnpj;
    }

    return new Promise<number>((resolve) => {
      return this.http.post<number>(this.urlApi + 'usuario/cadUsuario', cad).subscribe(
        retorno => resolve(retorno)
      );
    });
  }
}
