const assert = require("assert");
const MarioModel = require("../models/mario");

// describe tests
describe("Finding records in MongoDB:", function(){
    
    var char;
    // some code to run from previous pass tests before testing
    beforeEach(function(done){
        console.log("create & saves a new mario character record to DB");
        char = new MarioModel({
            name: "Mario",
            weight: 89
        });

        char.save().then(function(){
            // assert(char.isNew === false);
            done();
        });
    });

    // create tests
    it("find one record from the DB", function(done){

        MarioModel.findOne({name: "Mario"}).then(function(result){
            assert(result.name === "Mario");
            done();
        });

    });

    it("find one record by ID from the DB", function(done){

        MarioModel.findOne({_id: char._id}).then(function(result){
            assert(result._id.toString() === char._id.toString());
            done();
        });

    });

});