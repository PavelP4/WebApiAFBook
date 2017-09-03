export class Model {
    user: string;
    items: ToDoItem[];

    constructor() {
        this.user = "Adam";
        this.items = [
            new ToDoItem("Buy Flowers", false),
            new ToDoItem("Get Shoes", false),
            new ToDoItem("Collect Tickets", false),
            new ToDoItem("Call Joe", false)
        ];
    }
}

export class ToDoItem {
    action: string;
    done: boolean;

    constructor(action: string, done: boolean) {
        this.action = action;
        this.done = done;
    }
}