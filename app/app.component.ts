//retrieve portions of core Angular code
import { Component } from '@angular/core';

//annotation
  //how a component appears
@Component({
  selector: 'app-root',
  template:`
  <div class="container">
    <h1>To Do List for {{month}}/{{day}}/{{year}}</h1>
    <h3>{{currentFocus}}</h3>
    <ul>
      <li [class]="priorityColor(currentTask)" (click)="isDone(currentTask)" *ngFor="let currentTask of tasks">{{currentTask.description}}  <button (click)="editTask()">Edit!</button> </li>
    </ul>
  </div>
  `
})

//class definition of Component
  //how a component behaves
export class AppComponent {
  currentFocus: string = 'angular homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  tasks: Task[] = [
    new Task('Finish weekend Angular homework for Epicodus course', 3),
    new Task('Begin brainstorming possible JavaScript group projects', 2),
    new Task('Add README file to last few Angular repos on GitHub', 2)
  ];

  editTask() {
    alert("alert");
  }

  isDone(clickedTask: Task) {
    if(clickedTask.done === true) {
      alert("true");
    } else {
      alert(false);
    }
  }

  priorityColor(currentTask){
    if (currentTask.priority === 3){
      return "bg-danger";
    } else if (currentTask.priority === 2) {
      return  "bg-warning";
    } else {
      return "bg-info";
    }
  }
}

export class Task {
  public done: boolean = false;
  constructor(public description: string, public priority: number){}
}
