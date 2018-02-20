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
      <li>{{firstTask.description}}</li>
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
  firstTask = {
    description: "Finish weekend Angular homework for Epicodus course"
  }
}
