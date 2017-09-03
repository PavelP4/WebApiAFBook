import { Component } from "@angular/core";
import { Model } from "./../Models/Models";

@Component({
    selector: "app-header",
    templateUrl: "Templates/Header.html"
})

export class HeaderComponent {
    model = new Model();
    getName() {
        return this.model.user;
    }
}