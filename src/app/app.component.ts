import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  editMode: boolean = false;
  taskName: string = 'Sugerowane zadanie codzienne: sprzątanie';
  taskDate: string = '';
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
      done: true,
    },
    {
      name: 'Basen',
      deadline: '2024-02-09',
      done: false,
    },
  ];

  constructor(){
    this.sortTasks()
  }

  get footer(): string {
    return ' © Lista zadań zbudowana w Angularze.'
  }

  getDate(): Date {
    return new Date();
  }

  clearTasks() {
    this.tasks = [];
  }

  onKeyUp(event: KeyboardEvent) {
    const target = event.target as HTMLInputElement
    this.taskName = target.value;
  }

  createTask() {
    const task: Task = {
      name: this.taskName,
      deadline: this.taskDate,
      done: false,
    };
    this.tasks.push(task);
    this.taskDate = '';
    this.taskName = '';
    this.sortTasks()
  }

  switchEditMode() {
    this.editMode = !this.editMode;
  }

  markTaskAsDone(task: Task) {
    task.done = true;
    this.sortTasks()
    this.sortTasks()
  }

  removeTask(task: Task) {
    this.tasks = this.tasks.filter(e => e != task)
  }

  private sortTasks() {
    this.tasks = this.tasks.sort((a: Task, b: Task) =>
      a.done === b.done ? 0 : a.done ? 1 : -1)
  }


}
