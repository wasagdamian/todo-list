import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Lista zadań';

  get footer(): string {
    return ' © Lista zadań zbudowana w Angularze.'
  }

  getDate(): Date {
    return new Date();
  }
}
