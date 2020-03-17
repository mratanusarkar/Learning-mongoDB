const mongoose = require("mongoose");

// ser ES6 Promise as mongoose Promise
mongoose.Promise = global.Promise;


// connect to DB before test runs:
before(function(done){
    console.log("connecting to DB...")
    // tell mongoDB connection address
    mongoose.connect("mongodb://localhost/test", { 
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    }); // if db doesn't exist, it will automatically be created!

    // try to make connection and fire function once connection is made!
    mongoose.connection.once("open", function() {
        console.log("connection to mongoDB successful!\n");
        done();
    }).on("error", function(err){
        console.log("connection error: "+err);
    });
});

// drop the collection & empty DB before running each test
beforeEach(function(done){
    // drop the collection
    mongoose.connection.collections.mariocharacters.drop(function(){
        console.log("database cleared");
        done();
    });
});

// disconnect the DB connection after running all tests:
after(function(done){
    console.log("completed running all the tests!");
    // close the mongoDB connection
    mongoose.connection.close();
    console.log("mongoDB connection closed!");
    done();
});

















// "C:\Program Files\MongoDB\Server\4.2\bin\mongod.exe" --dbpath D:\MongoDB\data\db


// var db = mongoose.connection;
// db.on("error", function(err){
//     console.log("connection error: "+err);
// });
// db.once("open", function() {
//     console.log("connection to mongoDB successful...!");
// });

/**
 * element.on vs element.once:
 * on: listen everytime that action/event is made
 * once: listen only one time!
 */

