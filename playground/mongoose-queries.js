const {ObjectID} = require("mongodb");

const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");
const {User} = require("./../server/models/user");

var id = "5939745929df9652f4efb0fdd";

//if(!ObjectID.isValid(id))
//{
//    console.log("Id not valid");
//}

//Todo.find(
//    {
//        _id: id
//    }).then((todos) =>
//        {
//            console.log("Todos", todos);
//        });

//Todo.findOne(
//    {
//        _id: id
//    }).then((todo) =>
//        {
//            console.log("Todo", todo);
//        });

//Todo.findById(id).then((todo) =>
//        {
//            if(!todo)
//            {
//                return console.log("Id not found");
//            }
//            console.log("Todo By Id", todo);
//        }).catch((e) => console.log(e) );

var id_user = "59389dfccd9c2604165b3c6e";

User.findById(id_user).then((user) =>
    {
        if(!user)
        {
            return console.log("User not found.");
        }

        console.log("User", user);
    }).catch( (e) => console.log("Not a valid ID.") );
