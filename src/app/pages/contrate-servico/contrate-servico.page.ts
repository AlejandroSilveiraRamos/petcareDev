import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contrate-servico',
  templateUrl: './contrate-servico.page.html',
  styleUrls: ['./contrate-servico.page.scss'],
})
export class ContrateServicoPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }
  goTo(page: string){
    this.router.navigate([page])
  }
}
