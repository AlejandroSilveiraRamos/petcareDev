import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-sts',
  templateUrl: './tela-sts.page.html',
  styleUrls: ['./tela-sts.page.scss'],
})
export class TelaStsPage implements OnInit {
  
  slides = [
    {
      img: '../../../assets/imglogo/PetCareLogoSVG.svg',
      princ: 'Bem vindo',
      titulo: '3 passos para utilizar um serviço PetCare'
    },
    {
      img: '../../../assets/icon/iconCadsts.png',
      princ: '1',
      titulo: 'Cadastro'
     
    },
    {
      img: '../../../assets/icon/iconCellsts.png',
      princ: '2',
      titulo: 'Solicitar Serviço'
      
    },
    {
      princ: '3',
      titulo: 'Aguardar seu PetCare service',
      cadastro: 'Cadastrar-se',
      new: 'Crie sua conta',
      home: 'Entrar',
      homet: 'Já possui conta?'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goTo(page:string){
    this.router.navigate([page])
  }
}

