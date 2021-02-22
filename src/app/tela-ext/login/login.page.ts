import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  inputs = {
    email: {
      emBranco: true,
      editado: false
    },
    senha: {
      emBranco: true,
      editado: false
    }
  }
  senhaOK = false;
  emailOK = false;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  isBlank(value: string, input: string) {
    this.inputs[input].emBranco = (!value.trim()) ? true : false;
    this.inputs[input].editado = true;
    if(!value.trim()) {
      (input == 'email') ? this.emailOK = false : this.senhaOK = false;
    }

    this.ativarBotao();
  }

  removeMensagem(input: string) {
    this.inputs[input].emBranco = false;

    this.ativarBotao();
  }

  verificaEmail(email: string) {
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
        this.emailOK = true;
        this.ativarBotao();
      } else {
        this.emailOK = false;
        this.ativarBotao();
      }
  }

  verificaSenha(senha: string) {
    if(senha.length >= 8) {
      this.senhaOK = true;
      this.ativarBotao();
    } else {
      this.senhaOK = false;
      this.ativarBotao();
    }
  }

  @ViewChild('btnLogin') btnLogin: HTMLButtonElement;
  ativarBotao() {
    if(this.emailOK && this.senhaOK) {
      this.btnLogin.disabled = false;
    } else {
      this.btnLogin.disabled = true;
    }
  }

  logar(email: string, senha: string) {
    var objRetorno: {
      token: string
    }
    new Promise<typeof objRetorno>((resolve) => {
      this.http.get<typeof objRetorno>(`http://201.2.233.226:8080/usuario/logar?email=${email}&senha=${senha}`).subscribe(
        retorno => resolve(retorno)
      )
    }).then(retorno => {
      if(retorno.token != '-1') {
        localStorage.setItem('token', retorno.token);
        this.router.navigate(['home-done'])
      } else {
        console.log('Email ou Senha incorretos')
      }
    })
  }

}
