
const {ObjectID} = require("mongodb");

const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");
const {User} = require("./../server/models/user");

//Todo.remove({}).then((result) =>
//    {
//        console.log(result);
//    });

Todo.findByIdAndRemove("5939d7ba1bb0e503adeaf1e8").then((todo) =>
    {
        console.log(todo);
    });
