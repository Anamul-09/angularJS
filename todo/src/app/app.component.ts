// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'todo';
// }


import { Component } from "@angular/core";
import { Model,TodoItem } from "./model";

@Component({
  selector: "todo-app",
  templateUrl: "app.component.html"
})
export class AppComponent {
  model = new Model();
  getName() {
    return this.model.user;
  }
  getTodoItems() {
    return this.model.items.filter(item => !item.done);
  }
  addItem(newItem:string) {
    if (newItem != "") {
    this.model.items.push(new TodoItem(newItem, false));
    }
    }

}