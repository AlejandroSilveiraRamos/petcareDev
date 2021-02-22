import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dono, Contato, Endereco } from './tipo-users';

@Injectable({
  providedIn: 'root'
})
export class CadInformacoesService {

  urlApi = 'http://201.2.233.226:8080/';

  constructor(private http: HttpClient) { }

  getEndereco(cep: string) {
    var objRetorno: {
      cep: string,
      logradouro: string,
      complemento: string,
      bairro: string,
      localidade: string,
      uf: string,
      ibge: string,
      gia: string,
      ddd: string,
      siafi: string
    }
    return new Promise<typeof objRetorno>((resolve) => {
      return this.http.get<typeof objRetorno>("https://viacep.com.br/ws/" + cep + "/json/").subscribe(
        retornoSite => resolve(retornoSite)
      );
    });
  }

  confirmaTelefone(telefone: string) {
      return new Promise<boolean>((resolve) => {
        return this.http.get<boolean>(this.urlApi + 'contato/verificar-uso/' + telefone).subscribe(
          retorno => resolve(retorno)
        )
      })
  }

  confirmaRG(rg: string) {
    return new Promise<boolean>((resolve) => {
      return this.http.get<boolean>(this.urlApi + 'dono/verificar-rg/' + rg).subscribe(
        retorno => resolve(retorno)
      )
    });
  }

  cadDono(dono: Dono): Promise<number> {
    return new Promise<number>((resolve) => {
      return this.http.post<string>(this.urlApi + 'dono/cad-infos-pessoais', dono).subscribe(
        retorno => resolve(parseInt(retorno))
      )
    })
  }

  cadCuidador(cuidador, flgTipo: number) {
    var tipoCuidador = (flgTipo == 2) ? 'fisico' : 'juridico';

    return new Promise<number>((resolve) => {
      return this.http.post<string>(this.urlApi + 'cuidador/novo-cuidador/' + tipoCuidador, cuidador).subscribe(
        retorno => resolve(parseInt(retorno))
      )
    })
  }

  cadContato(contato: Contato): Promise<number> {
    return new Promise<number>((resolve) => {
      return this.http.post<string>(this.urlApi + 'contato/salva-contato', contato).subscribe(
        retorno => resolve(parseInt(retorno))
      )
    })
  }

  cadEndereco(endereco: Endereco) {
    return new Promise<number>((resolve) => {
      return this.http.post<string>(this.urlApi + 'endereco/salvar-endereco', endereco).subscribe(
        retorno => resolve(parseInt(retorno))
      )
    })
  }
}
