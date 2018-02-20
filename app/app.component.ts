//retrieve portions of core Angular code
import { Component } from '@angular/core';

//annotation
  //how a component appears
@Component({
  selector: 'app-root',
  template:`
  <div class="container">
    <h1>My First Angular 2 App</h1>
  </div>
  `
})

//class definition of Component
  //how a component behaves
export class AppComponent {

}
