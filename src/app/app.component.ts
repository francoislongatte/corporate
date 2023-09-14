import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host:{
    'id': 'root'
  }
})
export class AppComponent {
  title = 'angular-universal';
}
