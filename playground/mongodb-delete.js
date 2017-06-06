//const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) =>
    {
        if (err)
        {
            return console.log("Unable to connect to MongoDB server");
        }

        console.log("Connected to MongoDB server");

        db.collection("Users").deleteMany({name: "Otavio"}).then((result) =>
            {
                console.log(result);
            });

//        db.collection("Todos").deleteOne({text: "Eat lunch"}).then((result) =>
//            {
//                console.log(result);
//            });


        db.collection("Users").findOneAndDelete({_id: new ObjectID("5935f8ca0ff7f47a04fa8e43")}).then((result) =>
            {
                console.log(result);
            });



        //db.close();
    });
