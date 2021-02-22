import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-done',
  templateUrl: './home-done.page.html',
  styleUrls: ['./home-done.page.scss'],
})
export class HomeDonePage {

  constructor(private router: Router) { }


  goToLogin() {
    this.router.navigateByUrl('/perfil');
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/home');
  }

}
