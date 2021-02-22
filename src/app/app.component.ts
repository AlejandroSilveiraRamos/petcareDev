import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  getHomeLink(): string {
    var token: string = localStorage.getItem('token');
    if(token != null) {
      return 'home-done';
    } else {
      return 'home';
    }
  }
}
