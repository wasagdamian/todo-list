import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Lista zadań';
  num = 845.4564563;
  translate = {
    zima: 'winter',
    wiosna: 'spring',
    jesień: 'autumn',
    lato: 'summer'
  };
  price = 213.23

  get footer(): string {
    return ' © Lista zadań zbudowana w Angularze.'
  }

  getDate(): Date {
    return new Date();
  }
}
