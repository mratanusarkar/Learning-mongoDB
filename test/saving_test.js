const assert = require("assert");
const MarioModel = require("../models/mario");

// describe tests
describe("Saving Records to MongoDB:", function(){
    
    // create tests
    it("create & saves a new mario character record to DB", function(done){

        var char = new MarioModel({
            name: "Mario",
            weight: 89
        });

        char.save().then(function(){
            assert(char.isNew === false);
            done();
        });

    });

});