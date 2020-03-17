const assert = require("assert");
const mongoose = require("mongoose");
const Author = require("../models/author");

// describe our tests
describe("Nesting Records", function () {

    beforeEach(function(done){
        mongoose.connection.collections.authors.drop(function(){
            console.log("database cleared");
            done();
        });
    });
    
    // create tests
    it("create an author with sub-documents", function(done){

        // create a model of author with few books
        var sray = new Author({
            name: "Satyajit Ray",
            age: 70,
            books: [
                {title: "Professor Shankur Samagra", pages: 644},
                {title: "Feluda Samagra", pages: 1025},
                {title: "Tarinikhuror Kirtikalap", pages: 137}
            ]
        });

        // save the data to mongoDB database
        sray.save().then(function(){
            Author.findOne({name:"Satyajit Ray"}).then(function(record){
                assert(record.books.length === 3);
                done();
            });
        });
    });

    it("add a new book to an existing author", function(done){

        // create a model of author with few books
        var sray = new Author({
            name: "Satyajit Ray",
            age: 70,
            books: [
                {title: "Professor Shankur Samagra", pages: 644},
                {title: "Feluda Samagra", pages: 1025},
                {title: "Tarinikhuror Kirtikalap", pages: 137}
            ]
        });

        // save the data to mongoDB database
        sray.save().then(function(){
            Author.findOne({name:"Satyajit Ray"}).then(function(record){
                // now add/push a new book
                record.books.push({title: "The Collected Short Stories", pages: 424});
                record.save().then(function(){
                    Author.findOne({name: "Satyajit Ray"}).then(function(result){
                        assert(record.books.length === 4);
                        done();
                    });
                });
            });
        });
    });
});