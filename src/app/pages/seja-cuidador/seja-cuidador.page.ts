import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CadUsuarioCuidadorPage } from 'src/app/tela-ext/cadastros/cad-usuario-cuidador/cad-usuario-cuidador.page';

@Component({
  selector: 'app-seja-cuidador',
  templateUrl: './seja-cuidador.page.html',
  styleUrls: ['./seja-cuidador.page.scss'],
})
export class SejaCuidadorPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  go(){
    this.router.navigate(['cad-usuario-cuidador'])
  }
}
