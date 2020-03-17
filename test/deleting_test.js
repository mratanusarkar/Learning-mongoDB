const assert = require("assert");
const MarioModel = require("../models/mario");

// describe tests
describe("Deleting records in MongoDB:", function(){
    
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
    it("delete one record from the DB using findOneAndRemove", function(done){

        MarioModel.findOneAndRemove({name: "Mario"}).then(function(){
            MarioModel.findOne({name: "Mario"}).then(function(result){
                assert(result === null);
                done();
            });
            
        });

    });

    it("delete one record from the DB using findOneAndDelete", function(done){

        MarioModel.findOneAndDelete({name: "Mario"}).then(function(){
            MarioModel.findOne({name: "Mario"}).then(function(result){
                assert(result === null);
                done();
            });
            
        });

    });

});