//var model = {
//    user: "Adam",
//    items: [{ action: "Buy Flowers", done: false },
//        { action: "Get Shoes", done: false },
//        { action: "Collect Tickets", done: true },
//        { action: "Call Joe", done: false }]
//};
"use strict";
var Model = (function () {
    function Model() {
        this.user = "Adam";
        this.items = [
            new ModelItem("Buy Flowers", false),
            new ModelItem("Get Shoes", false),
            new ModelItem("Collect Tickets", false),
            new ModelItem("Call Joe", false)
        ];
    }
    return Model;
}());
exports.Model = Model;
var ModelItem = (function () {
    function ModelItem(action, done) {
        this.action = action;
        this.done = done;
    }
    return ModelItem;
}());
