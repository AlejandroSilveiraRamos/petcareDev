import { Usuario } from './../../usuario';
import { HttpClient } from '@angular/common/http';
import { Endereco, Dono, Contato, CuidadorFisico, CuidadorJuridico } from './../../tipo-users';
import { Component, OnInit } from '@angular/core';
import { Token } from '@angular/compiler/src/ml_parser/lexer';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  tipoUsuario = 0;
  infosPessoais = {
    nome: '',
    dtNascimento: '',
    rg: '',
    email:'',
    cpf: '',
  };
  infosJuridico = {
    razaoSocial: '',
    responsavel: '',
    email: '',
    cnpj: ''
  }
  enderecos: Array<Endereco>;
  contatos: Array<Contato>;
  urlAPI = 'http://201.2.233.226:8080/';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const token = localStorage.getItem('token');
    this.getInfosUsuario(token).then(retornoUsuario => {
      this.getTipoUsuario(token).then(retornoTipo => {
        this.tipoUsuario = retornoTipo;
        if(retornoTipo == 1) {
          this.infosPessoais.email = retornoUsuario.email;
          this.infosPessoais.cpf = retornoUsuario.cpf;
          this.getInfosDono(token).then(retornoInfos => {
            this.infosPessoais.nome = retornoInfos.nome;
            var dtSemFormato = retornoInfos.dtNascimento;
            var dtFormatada = dtSemFormato.substring(8, 10) + '/' + dtSemFormato.substring(5, 7) + '/' + dtSemFormato.substring(0, 4);
            this.infosPessoais.dtNascimento = dtFormatada;
            this.infosPessoais.rg = retornoInfos.rg;

            this.getContato(retornoTipo, retornoInfos.id).then(retorno => {
              this.contatos = retorno;
            });
            this.getEnderecos(retornoTipo, retornoInfos.id).then(retorno => {
              this.enderecos = retorno;
            })
          })
        } else if (retornoTipo == 2) {
          this.infosPessoais.email = retornoUsuario.email;
          this.infosPessoais.cpf = retornoUsuario.cpf;
          this.getInfosCuidadorFisico(token).then(retornoInfos => {
            this.infosPessoais.nome = retornoInfos.nome;
            var dtSemFormato = retornoInfos.dtNascimento;
            var dtFormatada = dtSemFormato.substring(8, 10) + '/' + dtSemFormato.substring(5, 7) + '/' + dtSemFormato.substring(0, 4);
            this.infosPessoais.dtNascimento = dtFormatada;
            this.infosPessoais.rg = retornoInfos.rg;

            this.getContato(retornoTipo, retornoInfos.id).then(retorno => {
              this.contatos = retorno;
            });
            this.getEnderecos(retornoTipo, retornoInfos.id).then(retorno => {
              this.enderecos = retorno;
            })
          })
        } else {
          this.infosJuridico.email = retornoUsuario.email;
          this.infosJuridico.cnpj = retornoUsuario.cnpj;
          this.getInfosCuidadorJuridico(token).then(retornoInfos => {
            this.infosJuridico.razaoSocial = retornoInfos.razaoSocial;
            this.infosJuridico.responsavel = retornoInfos.responsavel

            this.getContato(retornoTipo, retornoInfos.id).then(retorno => {
              this.contatos = retorno;
            });
            this.getEnderecos(retornoTipo, retornoInfos.id).then(retorno => {
              this.enderecos = retorno;
            })
          })
        }

      })
    })


  }

  getInfosUsuario(token) {
    return new Promise<Usuario>((resolve) => {
      return this.http.get<Usuario>(this.urlAPI + 'usuario/get/' + token).subscribe(
        retorno => resolve(retorno)
      )
    })
  }

  getTipoUsuario(token) {
    return new Promise<number>((resolve) => {
      return this.http.get<string>(this.urlAPI + 'tipo-user/get-tipo/' + token).subscribe(
        retorno => resolve(parseInt(retorno))
      )
    })
  }

  getInfosDono(token) {
    return new Promise<Dono>((resolve) => {
      return this.http.get<Dono>(this.urlAPI + 'dono/get-dono/' + token).subscribe(
        retorno => resolve(retorno)
      )
    })
  }

  getInfosCuidadorFisico(token) {
    return new Promise<CuidadorFisico>((resolve) => {
      return this.http.get<CuidadorFisico>(this.urlAPI + 'cuidador/fisico/' + token).subscribe(
        retorno => resolve(retorno)
      )
    })
  }

  getInfosCuidadorJuridico(token) {
    return new Promise<CuidadorJuridico>((resolve) => {
      return this.http.get<CuidadorJuridico>(this.urlAPI + 'cuidador/juridico/' + token).subscribe(
        retorno => resolve(retorno)
      )
    })
  }

  getContato(flgTipo, id) {
    return new Promise<Array<Contato>>((resolve) => {
      return this.http.get<Array<Contato>>(this.urlAPI + 'contato/lista-contatos/' + flgTipo + '/' + id).subscribe(
        retorno => resolve(retorno)
      )
    })
  }

  getEnderecos(flgTipo, id) {
    return new Promise<Array<Endereco>>((resolve) => {
      return this.http.get<Array<Endereco>>(this.urlAPI + 'endereco/todos-enderecos/' + flgTipo + '/' + id).subscribe(
        retorno => resolve(retorno)
      )
    })
  }

}
