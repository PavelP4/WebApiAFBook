//var model = {
//    user: "Adam",
//    items: [{ action: "Buy Flowers", done: false },
//        { action: "Get Shoes", done: false },
//        { action: "Collect Tickets", done: true },
//        { action: "Call Joe", done: false }]
//};


export class Model {
    user: string;
    items: ModelItem[];

    constructor() {
        this.user = "Adam";
        this.items = [
            new ModelItem("Buy Flowers", false),
            new ModelItem("Get Shoes", false),
            new ModelItem("Collect Tickets", false),
            new ModelItem("Call Joe", false)
        ];
    }
}

class ModelItem {
    action: string;
    done: boolean;

    constructor(action: string, done: boolean) {
        this.action = action;
        this.done = done;
    }
}