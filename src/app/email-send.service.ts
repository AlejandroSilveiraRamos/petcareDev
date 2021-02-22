import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailSendService {

  urlServicoEmails = 'http://201.2.233.226:3000/enviar-codigo';
  codigo = '';

  constructor(private http: HttpClient) { }

  enviarEmail(email: string, codigo: string): Promise<string> {
    this.codigo = codigo;
    var promise = new Promise<string>((resolve) => {
      var objSend = {
        email: email,
        codigo: codigo
      }
      var objRetorno: {
        retorno: ""
      }
      this.http.post<typeof objRetorno>(this.urlServicoEmails, objSend).subscribe(resposta => {
        resolve(resposta.retorno);
      });
    });
    return promise;
  }
}
