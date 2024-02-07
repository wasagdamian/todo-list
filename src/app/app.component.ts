import { Component } from '@angular/core';
import { Task } from './task';

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
  tasks: Task[] = [
    {
      name: 'Siłownia',
      deadline: '2024-02-07',
      done: false,
    },
    {
      name: 'Zakupy',
      deadline: '2024-02-08',
      done: false,
    },
    {
      name: 'Basen',
      deadline: '2024-02-09',
      done: false,
    },
  ];

  get footer(): string {
    return ' © Lista zadań zbudowana w Angularze.'
  }

  getDate(): Date {
    return new Date();
  }
}
