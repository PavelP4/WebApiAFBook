import { Component } from "@angular/core";
import { Model, ToDoItem } from "./../Models/Models";

@Component({
    selector: "app-component",
    templateUrl: "Templates/app.component.html"
})

export class AppComponent {
    model = new Model();
    getName() {
        return this.model.user;
    }
    getTodoItems() {
        return this.model.items.filter(item => !item.done);
    }
    addItem(newItem) {
        if (newItem != "") {
            this.model.items.push(new ToDoItem(newItem, false));
        }
    }
}