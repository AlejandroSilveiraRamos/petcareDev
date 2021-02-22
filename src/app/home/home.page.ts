import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


  constructor(private router: Router) {}

  ngOnInit() {
    var token: string = localStorage.getItem('token');
    if(token != null) {
      this.router.navigateByUrl('home-done')
    }
  }

  goTo(page: string){
    this.router.navigate([page])
  }


}
