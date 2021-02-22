import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EmailSendService } from 'src/app/email-send.service';

@Component({
  selector: 'app-modal-confirmacao',
  templateUrl: './modal-confirmacao.component.html',
  styleUrls: ['./modal-confirmacao.component.scss'],
})
export class ModalConfirmacaoComponent {

  botaoDesativado = true; 
  jaConfirmou = false;

  constructor(private modal: ModalController, private emailService: EmailSendService) {}

  fecharModal() {
    this.jaConfirmou = true;
    this.modal.dismiss({proximaEtapa: true});
  }

  verificaCodigo(codigoInput: HTMLInputElement) {
    var codigo = codigoInput.value;

    if(!(codigo.length <= 6)) {
      codigoInput.value = codigo.substring(0, 6);
    } else if(codigo.length < 6) {
      this.botaoDesativado = true;
    } else {
      this.botaoDesativado = false;
    }
    
    if(codigo.length == 6) {
      if(codigo == this.emailService.codigo) {
        this.botaoDesativado = false;
      } else {
        this.botaoDesativado = true;
      }
    }
  }

}
