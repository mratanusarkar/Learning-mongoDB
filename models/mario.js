const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create mario Schema
const MarioSchema = new Schema({
    name: String,
    weight: Number
});

// create mario Model based on the mario schema
const MarioModel = mongoose.model("marioCharacter",MarioSchema);

module.exports = MarioModel;