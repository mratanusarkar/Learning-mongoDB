const assert = require("assert");
const MarioModel = require("../models/mario");

// describe tests
describe("Updating records in MongoDB:", function(){
    
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
    it("update one record in the DB", function(done){

        MarioModel.findOneAndUpdate({name: "Mario"}, {name: "Luigi"}).then(function(){
            MarioModel.findOne({_id: char._id}).then(function(result){
                assert(result.name === "Luigi");
                done();
            });
            
        });

    });

    it("update records with Incrementing by 1", function(done){
        MarioModel.update({}, {$inc: {weight: 1}}).then(function(){
            MarioModel.findOne({name: "Mario"}).then(function(result){
                assert(result.weight === char.weight+1);
                done();
            });

        });
        
    });

});